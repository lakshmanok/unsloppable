const {readFileSync} = require('node:fs');
const {runInNewContext} = require('node:vm');
const assert = require('node:assert/strict');
const data = readFileSync('docs/workflow/data.js', 'utf8');
const migration = readFileSync('docs/workflow/checklist-state.js', 'utf8');
const api = runInNewContext(data + '\n' + migration + '\n({CHECKLISTS,EXTRA_CHECKLISTS,CHECKLIST_MIGRATION_V4,migrateChecklistChecks,standardPassComplete,repeatStandardPass,exportStandardPasses})');
const plain = value => JSON.parse(JSON.stringify(value));
const all = [...api.CHECKLISTS, ...Object.values(api.EXTRA_CHECKLISTS)];

// Every original item survives, with each new check tied to the right saved item.
for (const g of all) {
  const mapping = g.id === 'standard' ? [0,1,2,3,5,6] : api.CHECKLIST_MIGRATION_V4[g.id];
  assert.equal(mapping.length, g.items.length, `${g.id}: mapping length`);
  const oldCount = Math.max(...mapping) + 1;
  assert.deepEqual([...new Set(mapping)], Array.from({length:oldCount},(_,i)=>i).filter(i=>g.id !== 'standard' || i !== 4));
  const used = new Set();
  for (const group of g.groups || []) {
    assert(group.count >= 2);
    assert(group.start >= 0 && group.start + group.count <= g.items.length);
    for (let i=group.start;i<group.start+group.count;i++) {
      assert(!used.has(i), `${g.id}: overlapping group`);used.add(i);
      assert(g.items[i].trim());
    }
  }
  for (let oldIndex=0;oldIndex<oldCount;oldIndex++) {
    const old = Array(oldCount).fill(false);old[oldIndex]=true;
    const key = g.id==='6' ? '6:first-section' : g.id;
    const record={checklistVersion:3,checks:{[key]:old},notes:{[key]:'Keep my evidence'},sign:['a','b','c']};
    api.migrateChecklistChecks(record);
    assert.deepEqual(plain(record.checks[key]), plain(mapping.map(i=>i===oldIndex)), `${g.id}: original index ${oldIndex}`);
    assert.equal(record.notes[key],'Keep my evidence');
    assert.deepEqual(record.sign,['a','b','c']);
    const snapshot=JSON.stringify(record);
    api.migrateChecklistChecks(record);
    assert.equal(JSON.stringify(record),snapshot,'Migration must be idempotent');
  }
}
// Upgrade both deployed schemas, including partially completed prompt groups.
for (const version of [undefined,2,3]) {
  const oldStandard = version===undefined ? [true,false,true,false] : version===2 ? [true,false,true,false,true,false] : [true,false,true,false,true,true,false];
  const record={checklistVersion:version,checks:{standard:oldStandard,'6:a':[true,false,true],'6:b':[false,true,false]},notes:{standard:'Keep this'}};
  api.migrateChecklistChecks(record);
  const expected=version===undefined?[true,true,true,false,false,true,false]:version===2?[true,false,true,false,false,true,false]:oldStandard;
  assert.deepEqual(plain(record.checks.standard),[0,1,2,3,5,6].map(i=>expected[i]));
  assert.equal(record.checks['6:a'][0],true);
  assert.equal(record.checks['6:a'][1],true);
  assert.equal(record.checks['6:b'][0],false);
  assert.equal(record.checks['6:b'][2],true);
}
// Examples and alternatives must not become a requirement to do every option.
assert(api.EXTRA_CHECKLISTS.standard.items.some(t=>t.includes('a pivot, an admission, a real anecdote, or an honest red team')));
assert(api.CHECKLISTS.find(g=>g.id==='4').items.some(t=>t.includes('observed, confirmed, estimated, quoted, or assumed')));
assert.deepEqual(plain(api.EXTRA_CHECKLISTS.standard.items.slice(3).map(t=>t.split(':')[0])),['Write','Polish','Edit']);
console.log(`Passed: ${all.length} checklists; group boundaries; every saved-item mapping; schemas 1–5; independent sections; retained notes; alternatives.`);
// Export must include each child exactly once, with its own saved state and heading.
const app = readFileSync('docs/workflow/app.js', 'utf8');
const exportSource = app.slice(app.indexOf('function exportChecks('), app.indexOf('function checklist()'));
const exportChecks = runInNewContext(exportSource + '\nexportChecks');
for (const g of all) {
  const values = g.items.map((_,i)=>i%2===0);
  const text = exportChecks(g, values);
  const lines = text.split('\n').filter(line=>line.startsWith('- ['));
  assert.equal(lines.length,g.items.length,`${g.id}: every check exported`);
  g.items.forEach((item,i)=>assert.equal(lines[i],`- [${values[i]?'x':' '}] ${item}`));
  for (const cluster of g.groups || []) assert(text.includes(`### ${cluster.title}\n`));
}
console.log('Passed: grouped Markdown exports preserve every check, checkmark, and group heading.');

const loopRecord={checklistVersion:4, checks:{standard:[true,false,true,true,true,false,true]}, notes:{standard:'Verify the revised estimate'}};
api.migrateChecklistChecks(loopRecord);
assert.deepEqual(plain(loopRecord.checks.standard),[true,false,true,true,false,true]);
assert.equal(api.repeatStandardPass(loopRecord),false,'Cannot archive an incomplete pass');
loopRecord.checks.standard[4]=true;
assert.equal(api.standardPassComplete(loopRecord),true);
assert.equal(api.repeatStandardPass(loopRecord),true);
assert.deepEqual(plain(loopRecord.checks.standard),[true,false,true,false,false,false]);
assert.equal(loopRecord.standardRounds.length,1);
assert.equal(loopRecord.standardRounds[0].notes,'Verify the revised estimate');
assert.equal(api.standardPassComplete(loopRecord),false);
assert.equal(api.repeatStandardPass(loopRecord),false);
assert.equal(loopRecord.standardRounds.length,1);
const saved=JSON.parse(JSON.stringify(loopRecord));
api.migrateChecklistChecks(saved);
assert.equal(saved.standardRounds.length,1);
assert(api.exportStandardPasses(saved).includes('current pass 2'));
assert(api.exportStandardPasses(saved).includes('### Completed pass 1'));
assert(api.exportStandardPasses(saved).includes('Verify the revised estimate'));
console.log('Passed: loop migration, repeat gating, retained prompt checks, round history, reload, and export.');
