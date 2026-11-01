'use strict';
const TRIAGE_TIERS = ['low', 'medium', 'high'];
const TRIAGE_QUESTIONS = [
  {id: 'behavior', title: 'Does anyone change their behavior because of this document?', choices: ['No', 'Maybe', 'Yes']},
  {id: 'credibility', title: 'If a claim is challenged publicly, whose credibility is on the line?', choices: ['Routine internal communication', 'Client or team reputation', 'Named professional or institutional authority']},
  {id: 'outcome', title: 'What is the worst realistic outcome of an undetected error?', choices: ['Minor, easily corrected embarrassment', 'Limited financial loss or a recoverable bad decision', 'Major loss, sanction, or harm to a person']},
  {id: 'reversal', title: 'Is the decision reversible—and how expensive is the reversal?', choices: ['Easy and inexpensive to reverse', 'Possible to reverse, but costly', 'Irreversible or prohibitively expensive to reverse']},
  {id: 'life', title: 'Will it outlive the conversation?', choices: ['Short-lived', 'May be forwarded or reused', 'Formal record, publication, or evidence others will rely on']}
];
const TRIAGE_BUDGETS = {low: [2, 5, 10], medium: [30, 60, 90], high: [180, 300, 480]};
function assessTriage(answers) {
  const answered = TRIAGE_QUESTIONS.filter(q => TRIAGE_TIERS.includes(answers[q.id]));
  if (answered.length !== TRIAGE_QUESTIONS.length) return {tier: '', reasons: [], remaining: TRIAGE_QUESTIONS.length - answered.length};
  const tier = TRIAGE_TIERS[Math.max(...answered.map(q => TRIAGE_TIERS.indexOf(answers[q.id])))];
  return {tier, reasons: answered.filter(q => answers[q.id] === tier).map(q => q.choices[TRIAGE_TIERS.indexOf(tier)]), remaining: 0};
}
function budgetLabel(minutes) {return minutes >= 180 ? `${minutes / 60} hours` : `${minutes} minutes`;}
function updateTriage(answers) {
  const result = assessTriage(answers);
  answers.tier = result.tier;
  if (!result.tier || !TRIAGE_BUDGETS[result.tier].some(m => String(m / 60) === String(answers.hours))) answers.hours = '';
  return result;
}
function triageReady(answers) {
  const {tier} = assessTriage(answers);
  return !!tier && TRIAGE_BUDGETS[tier].some(m => String(m / 60) === String(answers.hours));
}
function triageAnswerLabel(id, value) {
  const question = TRIAGE_QUESTIONS.find(q => q.id === id);
  return question ? question.choices[TRIAGE_TIERS.indexOf(value)] || 'Not recorded' : value || 'Not recorded';
}
