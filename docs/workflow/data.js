const CHECKLISTS = [
  {
    "id": "1",
    "title": "To-Do List Before Opening the AI Tool",
    "items": [
      "Read two or three high-quality sources, primary where possible, and save them where they can be easily found again.",
      "Read the strongest opposing case articulated in the words of someone respected by people holding this viewpoint.",
      "Be able to name the specific thing in the case that’s surprising. (If nothing was surprising, it’s possible too little has been read about the case or only materials in agreeance.)",
      "Write a rough outline down by hand, including the provisional position, reasons, ask, and weakest point.",
      "Write one sentence describing what could change the brief’s position.",
      "Do not ask a model to write anything."
    ]
  },
  {
    "id": "2a",
    "title": "The Workbench (Set Up Once)",
    "items": [
      "Select a tool for each of these 5 roles: retriever, grounded reader, sparring partner, adversary, and producer.",
      "Ensure the adversary model is from a different provider than the sparring partner model.",
      "Save personal style rules in persistent instructions, such as a Project, a Gem, or Custom Instructions, rather than retyping them each session.",
      "Ensure industry conventions (i.e., vocabulary, units, precision, what counts as evidence, how sources are cited, etc.) are up-to-date.",
      "Check that company format templates exist for each document type produced regularly, complete with an expected length and depth per section.",
      "Make sure two or three  personal writing samples are saved and reachable in seconds.",
      "Update and save in the default instructions a cringe list to reflect personal preferences.",
      "Confirm data handling for the class of materials being worked with.",
      "Connect all meeting, CRM, and document tools so the AI has access to actual work."
    ]
  },
  {
    "id": "2b",
    "title": "Quarterly Maintenance",
    "items": [
      "Refresh all writing samples with any better material written this quarter.",
      "Add annoying phrases from this quarter to the cringe list.",
      "Generate one sample document, then read it cold and check it to ensure it still sounds personally written.",
      "Review any new capabilities in tools that have been purchased.",
      "Evaluate all new tools and compare them to current choices for each role."
    ]
  },
  {
    "id": "3",
    "title": "The Sparring Session",
    "items": [
      "Tell the model not to write anything yet and ensure it doesn’t.",
      "Spend 15 minutes loading local facts it couldn’t possibly know, including the apparently irrelevant ones.",
      "Load the politics (i.e., who cares, who objects, who has history here, etc.).",
      "Instruct the model to interrogate, with instructions to prioritize questions that could be guessed wrong.",
      "Add at least one question that stumped you to a list of things to find out.",
      "Request 10 materially different framings from your AI model with the logic varied and ranking forbidden.",
      "Look for the fusion of two framings, rather than simply picking one off the list.",
      "Ensure  your provisional view was stated explicitly and its assumptions identified.",
      "Utilize at least two named adversaries with specific motives to ask hostile questions.",
      "Run a premortem, with the model committed to a single most-likely cause of failure.",
      "Read all the disagreements from a second provider model who answered cold for extremely important documents.",
      "List the recommendation, the failure condition, and the facts you still need to collect and make those calls."
    ]
  },
  {
    "id": "4",
    "title": "The Brief",
    "items": [
      "Make sure the brief is in a file and not a chat history.",
      "Name the audience as people with histories and known objections, not just as a category.",
      "Ensure the purpose states the decision needed and the date by which it’s required.",
      "Make sure your  position is written in your own words, including how you arrived at it.",
      "List the rejected options with the actual reason for each rejection.",
      "Note that every piece of evidence carries its status (e.g., observed, confirmed, estimated, quoted, or assumed).",
      "Remove unsupported claims or mark them for verification. Label estimates with their basis and assumptions.",
      "Make sure a locked list exists (including the recommendation, exclusions, conditions, spending structure, failure criteria, etc.).",
      "Write in the instruction to flag rather than silently apply substantive changes.",
      "Review and accept every suggestion from the model that appears in the brief."
    ]
  },
  {
    "id": "5",
    "title": "The Context Pack",
    "items": [
      "Make sure every substantive claim maps to a source document in the pack.",
      "Assemble the pack before generation starts.",
      "Ensure that each external fact is labeled (i.e., background, constraint, comparison, direct support, etc.).",
      "Guarantee that no fact is doing a job it cannot do, such as a national statistic standing in for a local estimate.",
      "Scan source material for anything a model could read as an instruction.",
      "Confirm that sensitive material is handled per the deployment confirmed in Phase Two.",
      "Secure the generation constraint in the prompt: Work only from these constraints and flag what you cannot support.",
      "A running context summary exists and will be refreshed before each major section.",
      "Open every session with the brief, followed by the task."
    ]
  },
  {
    "id": "6",
    "title": "The Per-Section Build Loop",
    "items": [
      "Ensure all",
      "context is refreshed: The brief is pasted and running summary is current.",
      "Make sure the section has an assertion title and I can name which rung it reaches.",
      "Check to see if the section was generated on its own and not simply extracted from a whole-document draft.",
      "Ensure facts are supplied when more substance is needed and that I didn’t ask the model to expand on anything.",
      "Check every number, name, date, citation and quotation against an outside source.",
      "Calculate all arithmetic separately, by hand or by code.",
      "Ensure that anything computable is produced by code from real data.",
      "Verify that every “therefore” has a sufficient “because” in front of it.",
      "Ask what would have to be true for the conclusion to be wrong. If that condition is plausible, revisit the argument.",
      "Apply the entropy question per paragraph, and that generic passages are replaced with specifics.",
      "Make sure the section ends with an implication for this reader, and not a restatement of a fact.",
      "Address any valid objection to a section, in a fresh session, in a different model."
    ]
  },
  {
    "id": "7",
    "title": "Polish, Then Edit",
    "items": [
      "Polish the pass run by the model, with my locked list and cringe list restated.",
      "Review every substantive change it proposed personally and aloud.",
      "Trace any false specifics—every statistic, comparison and citation—to a source I can open myself.",
      "Examine symmetrical structures: Are they genuinely comparable items, or is one decisive?",
      "Replace unfalsifiable sentences with decisions.",
      "Preserve real uncertainty and express it as a consequence for the decision; don’t delete it for neatness’s sake.",
      "Ensure that every number has an identifiable basis, and that the basis is visible on the page.",
      "Make sure local evidence described at the scope is actually observed and not generalized.",
      "Check that every section earns its place; remove sections whose absence makes no difference.",
      "Apply the cringe list and ensure that all AI slop is judged individually rather than purged.",
      "Verify that two or three entropy moves are present: include a pivot, an admission, a real anecdote, or  an honest red team."
    ]
  },
  {
    "id": "8",
    "title": "Read Your Brief Aloud",
    "items": [
      "Read the brief at speaking pace, out loud where possible, all the way through.",
      "Simplify sentences that are tripped over.",
      "Replace all words you would never say.",
      "Rewrite from scratch any text that made you wince .",
      "Apply the remove-the-name test to the key passages.",
      "Read the whole document in one sitting, checking for consistency between introduction, body and conclusion."
    ]
  },
  {
    "id": "9",
    "title": "Ship",
    "items": [
      "Ensure that the recommendation follows from the evidence and stated priorities, and that its conditions are still visible.",
      "Make sure that alternatives are described in terms their advocates would accept.",
      "Clarify that a reader can explain what would change my mind.",
      "Ensure that every cited source is opened; all dates, units, and definitions are checked; and each source supports the specific inference, and not merely the topic.",
      "Check arithmetic independently.",
      "Verify estimates are still labeled as estimates everywhere they appear, including summaries.",
      "Ensure proposals are not written as measured facts.",
      "Match all charts to the data, headings to conclusions, and notes to claims.",
      "Inspect the exported artifact in the form the reader will receive it.",
      "Write three sign-off sentences, and ensure I’m satisfied with all three.",
      "Make sure any applicable disclosure requirements are met."
    ]
  },
  {
    "id": "10",
    "title": "Harvest",
    "items": [
      "Add to the adversary seed list the question you failed to anticipate.",
      "Compare premortem predictions against what actually happened.",
      "Add repeated edits  to your cringe list and standing instructions.",
      "Place durable context from this brief into your AI templates.",
      "File the brief somewhere you can easily access it in six months."
    ]
  }
];
