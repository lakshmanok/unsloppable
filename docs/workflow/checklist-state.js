'use strict';
// Saved completion belongs to the old item, even when later items move.
// A completed compound check carries completion to each of its children.
function migrateChecklistChecks(record) {
  if (!(record.checklistVersion >= 2)) {
    const old = record.checks.standard;
    if (Array.isArray(old)) record.checks.standard = [!!old[0], !!old[0], !!old[0], ...old.slice(1)];
    record.checklistVersion = 2;
  }
  if (!(record.checklistVersion >= 3)) {
    const old = record.checks.standard;
    if (Array.isArray(old)) record.checks.standard = [...old.slice(0, 3), !!old[3], !!old[3], ...old.slice(4)];
    record.checklistVersion = 3;
  }
  if (!(record.checklistVersion >= 4)) {
    for (const [key, old] of Object.entries(record.checks)) {
      // Section reviews each have their own saved array: 6:<section ID>.
      const id = key.startsWith('6:') ? '6' : key;
      const mapping = CHECKLIST_MIGRATION_V4[id];
      if (mapping && Array.isArray(old)) record.checks[key] = mapping.map(index => !!old[index]);
    }
    record.checklistVersion = 4;
  }
  if (!(record.checklistVersion >= 5)) {
    const old = record.checks.standard;
    if (Array.isArray(old)) record.checks.standard = [0, 1, 2, 3, 5, 6].map(i => !!old[i]);
    record.checklistVersion = 5;
  }
  if (!Array.isArray(record.standardRounds)) record.standardRounds = [];

}

function standardPassComplete(record) {
  return [3, 4, 5].every(i => record.checks.standard?.[i] === true);
}
function repeatStandardPass(record) {
  if (!standardPassComplete(record)) return false;
  record.standardRounds.push({completedAt: new Date().toISOString(), notes: record.notes.standard || ''});
  record.checks.standard = [...record.checks.standard.slice(0, 3), false, false, false];
  return true;
}
function exportStandardPasses(record) {
  const rounds = record.standardRounds || [];
  return `\n\nWrite → Polish → Edit: current pass ${rounds.length + 1}.` + rounds.map((round, i) =>
    `\n\n### Completed pass ${i + 1}\n\n- [x] Write\n- [x] Polish\n- [x] Edit\n\nCompleted: ${round.completedAt}\n\nNotes at completion: ${round.notes || '—'}`
  ).join('');
}
