const {readFileSync} = require('node:fs');
const {runInNewContext} = require('node:vm');
const assert = require('node:assert/strict');
const api = runInNewContext(readFileSync('docs/workflow/triage.js', 'utf8') + '\n({assessTriage,updateTriage,triageReady,triageAnswerLabel,TRIAGE_BUDGETS})');
const keys = ['behavior','credibility','outcome','reversal','life'];
const tiers = ['low','medium','high'];
// Every combination: one severe consequence must never be averaged away.
for (let n=0; n<243; n++) {
  let value=n;
  const answers={};
  const ranks=keys.map(key=>{const rank=value%3;value=Math.floor(value/3);answers[key]=tiers[rank];return rank;});
  const expected=tiers[Math.max(...ranks)];
  assert.equal(api.assessTriage(answers).tier, expected);
  assert.equal(api.triageReady(answers),false);
  for (const minutes of api.TRIAGE_BUDGETS[expected]) {
    answers.hours=String(minutes/60);
    assert.equal(api.triageReady(answers),true);
    assert.equal(api.assessTriage(answers).tier,expected);
  }
}
const answers=Object.fromEntries(keys.map(k=>[k,'low']));
answers.hours=String(5/60);
api.updateTriage(answers);
answers.outcome='high';
api.updateTriage(answers);
assert.equal(answers.tier,'high');
assert.equal(answers.hours,'');
answers.hours='3';
assert.equal(api.triageReady(answers),true);
answers.outcome='low';
api.updateTriage(answers);
assert.equal(answers.tier,'low');
assert.equal(answers.hours,'');
answers.life='unrecognized';
assert.equal(api.assessTriage(answers).tier,'');
assert.equal(api.triageReady(answers),false);
assert.equal(api.triageAnswerLabel('behavior','high'),'Yes');
console.log('Passed: all 243 risk combinations, valid budgets, tier changes, incomplete answers, and export labels.');
