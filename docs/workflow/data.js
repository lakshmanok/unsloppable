const CHECKLISTS = [
  {
    "id": "1",
    "title": "To-Do List Before Opening the AI Tool",
    "writingSpaces": {"8": {"id": "change-position", "label": "What could change the brief’s position?", "rows": 3, "placeholder": "Write one sentence…"}},
    "items": [
      "Read two or three high-quality sources, primary where possible.",
      "Save the sources where you can easily find them again.",
      "Read the strongest opposing case articulated in the words of someone respected by people holding this viewpoint.",
      "Be able to name the specific thing in the case that’s surprising. (If nothing was surprising, it’s possible too little has been read about the case or only materials in agreeance.)",
      "Write your provisional position.",
      "Write the reasons for your position.",
      "Write what you want the reader to do.",
      "Write the weakest point in your argument.",
      "Write one sentence describing what could change the brief’s position.",
      "Do not ask a model to write anything."
    ],
    "groups": [
      {
        "title": "Read and retain your sources",
        "start": 0,
        "count": 3
      },
      {
        "title": "Write a rough outline by hand",
        "start": 4,
        "count": 4,
        "writingSpace": {"id": "rough-outline", "label": "Your rough outline", "rows": 8, "placeholder": "Write your provisional position, reasons, ask, and weakest point in your own words…"}
      }
    ]
  },
  {
    "id": "2a",
    "title": "The Workbench (Set Up Once)",
    "items": [
      "Choose a retriever.",
      "Choose a grounded reader.",
      "Choose a sparring partner.",
      "Choose an adversary.",
      "Choose a producer.",
      "Ensure the adversary model is from a different provider than the sparring partner model.",
      "Save personal style rules in persistent instructions, such as a Project, a Gem, or Custom Instructions, rather than retyping them each session.",
      "Check that vocabulary conventions are current.",
      "Check that unit conventions are current.",
      "Check that precision requirements are current.",
      "Check that standards of evidence are current.",
      "Check that citation conventions are current.",
      "Confirm that a template exists for each document type you produce regularly.",
      "Specify the expected length of each section in the templates.",
      "Specify the expected depth of each section in the templates.",
      "Save two or three personal writing samples.",
      "Confirm you can retrieve the samples in seconds.",
      "Update the cringe list to reflect your preferences.",
      "Save the cringe list in your default instructions.",
      "Confirm data handling for the class of materials being worked with.",
      "Connect the meeting tools you use.",
      "Connect the CRM tools you use.",
      "Connect the document tools you use."
    ],
    "groups": [
      {
        "title": "Choose tools for the five roles",
        "start": 0,
        "count": 5
      },
      {
        "title": "Update industry conventions",
        "start": 7,
        "count": 5
      },
      {
        "title": "Prepare company format templates",
        "start": 12,
        "count": 3
      },
      {
        "title": "Keep writing samples ready",
        "start": 15,
        "count": 2
      },
      {
        "title": "Maintain your cringe list",
        "start": 17,
        "count": 2
      },
      {
        "title": "Connect tools from your actual work",
        "start": 20,
        "count": 3
      }
    ]
  },
  {
    "id": "2b",
    "title": "Quarterly Maintenance",
    "items": [
      "Refresh all writing samples with any better material written this quarter.",
      "Add annoying phrases from this quarter to the cringe list.",
      "Generate one sample document.",
      "Read the sample cold to check that it still sounds like you.",
      "Review any new capabilities in tools that have been purchased.",
      "Evaluate new tools.",
      "Compare them with your current choice for each role."
    ],
    "groups": [
      {
        "title": "Check your voice",
        "start": 2,
        "count": 2
      },
      {
        "title": "Reassess your tools",
        "start": 5,
        "count": 2
      }
    ]
  },
  {
    "id": "3",
    "title": "The Sparring Session",
    "items": [
      "Tell the model not to write anything yet.",
      "Confirm that the model has not started drafting.",
      "Spend 15 minutes loading local facts it couldn’t possibly know, including the apparently irrelevant ones.",
      "Tell the model who cares about the outcome.",
      "Tell the model who objects.",
      "Tell the model who has relevant history here.",
      "Instruct the model to ask you questions.",
      "Tell it to prioritize questions whose answers it could guess wrong.",
      "Add at least one question that stumped you to a list of things to find out.",
      "Request 10 materially different framings.",
      "Check that the framings vary in their logic.",
      "Tell the model not to rank the framings.",
      "Look for the fusion of two framings, rather than simply picking one off the list.",
      "State your provisional view explicitly.",
      "Identify the assumptions behind your view.",
      "Name at least two adversaries.",
      "Give each adversary a specific motive.",
      "Ask the adversaries to pose hostile questions.",
      "Run a premortem, with the model committed to a single most-likely cause of failure.",
      "Read all the disagreements from a second provider model who answered cold for extremely important documents.",
      "Write the recommendation.",
      "Write the failure condition.",
      "List the facts you still need to collect.",
      "Make the calls needed to collect those facts."
    ],
    "groups": [
      {
        "title": "Keep drafting out of the sparring session",
        "start": 0,
        "count": 2
      },
      {
        "title": "Supply the politics",
        "start": 3,
        "count": 3
      },
      {
        "title": "Ask the model to interrogate you",
        "start": 6,
        "count": 2
      },
      {
        "title": "Explore different framings",
        "start": 9,
        "count": 3
      },
      {
        "title": "Make your provisional view explicit",
        "start": 13,
        "count": 2
      },
      {
        "title": "Use motivated adversaries",
        "start": 15,
        "count": 3
      },
      {
        "title": "Turn sparring into a recommendation",
        "start": 20,
        "count": 4
      }
    ]
  },
  {
    "id": "4",
    "title": "The Brief",
    "items": [
      "Make sure the brief is in a file and not a chat history.",
      "Name the people in the audience.",
      "Record their relevant histories.",
      "Record their known objections.",
      "State the decision needed.",
      "State the date by which the decision is required.",
      "Write your position in your own words.",
      "Explain how you arrived at that position.",
      "List the rejected options.",
      "Give the actual reason for each rejection.",
      "Note that every piece of evidence carries its status (e.g., observed, confirmed, estimated, quoted, or assumed).",
      "Remove unsupported claims or mark them for verification.",
      "Label estimates as estimates.",
      "Record the basis for each estimate.",
      "Record the assumptions behind each estimate.",
      "Record the recommendation in the locked list.",
      "Record the exclusions in the locked list.",
      "Record the conditions in the locked list.",
      "Record the spending structure in the locked list.",
      "Record the failure criteria in the locked list.",
      "Write in the instruction to flag rather than silently apply substantive changes.",
      "Review every model suggestion included in the brief.",
      "Confirm you accept every included suggestion."
    ],
    "groups": [
      {
        "title": "Describe the audience as people",
        "start": 1,
        "count": 3
      },
      {
        "title": "Specify the decision",
        "start": 4,
        "count": 2
      },
      {
        "title": "Explain your position",
        "start": 6,
        "count": 2
      },
      {
        "title": "Record rejected options",
        "start": 8,
        "count": 2
      },
      {
        "title": "Handle unsupported claims and estimates",
        "start": 11,
        "count": 4
      },
      {
        "title": "Create the locked list",
        "start": 15,
        "count": 5
      },
      {
        "title": "Own the model’s contributions",
        "start": 21,
        "count": 2
      }
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
      "Tell the model to work only from the supplied constraints.",
      "Tell the model to flag anything it cannot support.",
      "Create a running context summary.",
      "Refresh the summary before each major section.",
      "Supply the brief at the start of the session.",
      "State the task after supplying the brief."
    ],
    "groups": [
      {
        "title": "Constrain generation",
        "start": 6,
        "count": 2
      },
      {
        "title": "Maintain the running summary",
        "start": 8,
        "count": 2
      },
      {
        "title": "Open each session with context",
        "start": 10,
        "count": 2
      }
    ]
  },
  {
    "id": "6",
    "title": "The Per-Section Build Loop",
    "items": [
      "Paste the brief.",
      "Bring the running summary up to date.",
      "Write an assertion title for the section.",
      "Identify which rung of the four-rung test the section reaches.",
      "Check to see if the section was generated on its own and not simply extracted from a whole-document draft.",
      "Ensure facts are supplied when more substance is needed and that I didn’t ask the model to expand on anything.",
      "Check every number against an outside source.",
      "Check every name against an outside source.",
      "Check every date against an outside source.",
      "Check every citation against an outside source.",
      "Check every quotation against an outside source.",
      "Calculate all arithmetic separately, by hand or by code.",
      "Ensure that anything computable is produced by code from real data.",
      "Verify that every “therefore” has a sufficient “because” in front of it.",
      "Identify what would have to be true for the conclusion to be wrong.",
      "Revisit the argument if that condition is plausible.",
      "Ask of each paragraph: could anyone have written this about anything?",
      "Replace generic passages with relevant specifics.",
      "Make sure the section ends with an implication for this reader, and not a restatement of a fact.",
      "Start a fresh session in a different model.",
      "Ask for objections to the section.",
      "Address each valid objection."
    ],
    "groups": [
      {
        "title": "Refresh the context",
        "start": 0,
        "count": 2
      },
      {
        "title": "Give the section a point",
        "start": 2,
        "count": 2
      },
      {
        "title": "Verify the details against outside sources",
        "start": 6,
        "count": 5
      },
      {
        "title": "Test the conclusion",
        "start": 14,
        "count": 2
      },
      {
        "title": "Replace generic passages",
        "start": 16,
        "count": 2
      },
      {
        "title": "Get an independent critique",
        "start": 19,
        "count": 3
      }
    ]
  },
  {
    "id": "7",
    "title": "Final Polish and Edit",
    "items": [
      "Restate the locked list.",
      "Restate the cringe list.",
      "Run the model’s polish pass.",
      "Review every substantive change it proposed personally and aloud.",
      "Trace every statistic to its source.",
      "Trace every comparison to its source.",
      "Trace every citation to its source.",
      "Examine symmetrical structures: Are they genuinely comparable items, or is one decisive?",
      "Replace unfalsifiable sentences with decisions.",
      "Check that real uncertainty has survived the edit.",
      "Explain what that uncertainty means for the decision.",
      "Identify the basis for every number.",
      "Make that basis visible on the page.",
      "Make sure local evidence described at the scope is actually observed and not generalized.",
      "Check what would be lost if each section were removed.",
      "Remove sections whose absence makes no difference.",
      "Apply the cringe list and ensure that all AI slop is judged individually rather than purged.",
      "Verify that two or three entropy moves are present: include a pivot, an admission, a real anecdote, or  an honest red team."
    ],
    "groups": [
      {
        "title": "Prepare the polish pass",
        "start": 0,
        "count": 3
      },
      {
        "title": "Trace specifics to sources you can open",
        "start": 4,
        "count": 3
      },
      {
        "title": "Keep real uncertainty visible",
        "start": 9,
        "count": 2
      },
      {
        "title": "Show the basis for numbers",
        "start": 11,
        "count": 2
      },
      {
        "title": "Make every section earn its place",
        "start": 14,
        "count": 2
      }
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
      "Skim the whole document in one sitting.",
      "Check that the body delivers what the introduction promises.",
      "Check that the conclusion agrees with the body."
    ],
    "groups": [
      {
        "title": "Check the whole document for consistency",
        "start": 5,
        "count": 3
      }
    ]
  },
  {
    "id": "9",
    "title": "Ship",
    "items": [
      "Check that the recommendation follows from the evidence.",
      "Check that the recommendation reflects the stated priorities.",
      "Check that the recommendation’s conditions remain visible.",
      "Make sure that alternatives are described in terms their advocates would accept.",
      "Clarify that a reader can explain what would change my mind.",
      "Open every cited source.",
      "Check all dates against the sources.",
      "Check all units against the sources.",
      "Check all definitions against the sources.",
      "Check that each source supports the specific inference, not merely the topic.",
      "Check arithmetic independently.",
      "Verify estimates are still labeled as estimates everywhere they appear, including summaries.",
      "Ensure proposals are not written as measured facts.",
      "Match charts to the data.",
      "Match headings to the conclusions.",
      "Match notes to the claims.",
      "Inspect the exported artifact in the form the reader will receive it.",
      "Complete “I am asserting that…” and confirm you are satisfied with it.",
      "Complete “If I turn out to be wrong, it will be because…” and confirm you are satisfied with it.",
      "Complete “The claims I personally verified against their sources are…” and confirm you are satisfied with it.",
      "Make sure any applicable disclosure requirements are met."
    ],
    "groups": [
      {
        "title": "Validate the recommendation",
        "start": 0,
        "count": 3
      },
      {
        "title": "Verify claims at their sources",
        "start": 5,
        "count": 5
      },
      {
        "title": "Inspect the artifact’s claims",
        "start": 13,
        "count": 3
      },
      {
        "title": "Complete your sign-off",
        "start": 17,
        "count": 3,
        "signoff": true
      }
    ]
  },
  {
    "id": "10",
    "title": "Harvest",
    "items": [
      "Add to the adversary seed list the question you failed to anticipate.",
      "Compare premortem predictions against what actually happened.",
      "Add repeated edits to your cringe list.",
      "Add repeated edits to your standing instructions.",
      "Place durable context from this brief into your AI templates.",
      "File the brief somewhere you can easily access it in six months."
    ],
    "groups": [
      {
        "title": "Carry recurring edits forward",
        "start": 2,
        "count": 2
      }
    ]
  }
];

const EXTRA_CHECKLISTS = {
  "quick": {
    "id": "quick",
    "title": "The quick check",
    "items": [
      "State the task.",
      "Supply the relevant context.",
      "Verify every checkable fact.",
      "Read the document once.",
      "Send the document."
    ],
    "groups": [
      {
        "title": "Prepare the prompt",
        "start": 0,
        "count": 2
      },
      {
        "title": "Read and send",
        "start": 3,
        "count": 2
      }
    ]
  },
  "standard": {
    "id": "standard",
    "title": "The standard review",
    "groups": [
      {
        "title": "Prepare the prompt",
        "start": 0,
        "count": 3
      },
      {
        "title": "Write → Polish → Edit",
        "start": 3,
        "count": 3,
        "loop": true
      }
    ],
    "items": [
      "Specify the audience.",
      "State the purpose.",
      "Supply the relevant context.",
      "Write: generate or revise the draft.",
      "Polish: add one or two entropy moves (a pivot, an admission, a real anecdote, or an honest red team).",
      "Edit: verify everything checkable against its sources."
    ]
  }
};

// New item index → saved item index in checklist schema 3.
const CHECKLIST_MIGRATION_V4 = {
  "1": [
    0,
    0,
    1,
    2,
    3,
    3,
    3,
    3,
    4,
    5
  ],
  "2a": [
    0,
    0,
    0,
    0,
    0,
    1,
    2,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    8,
    8,
    8
  ],
  "2b": [
    0,
    1,
    2,
    2,
    3,
    4,
    4
  ],
  "3": [
    0,
    0,
    1,
    2,
    2,
    2,
    3,
    3,
    4,
    5,
    5,
    5,
    6,
    7,
    7,
    8,
    8,
    8,
    9,
    10,
    11,
    11,
    11,
    11
  ],
  "4": [
    0,
    1,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    6,
    6,
    6,
    6,
    7,
    7,
    7,
    7,
    7,
    8,
    9,
    9
  ],
  "5": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    6,
    7,
    7,
    8,
    8
  ],
  "6": [
    0,
    0,
    1,
    1,
    2,
    3,
    4,
    4,
    4,
    4,
    4,
    5,
    6,
    7,
    8,
    8,
    9,
    9,
    10,
    11,
    11,
    11
  ],
  "7": [
    0,
    0,
    0,
    1,
    2,
    2,
    2,
    3,
    4,
    5,
    5,
    6,
    6,
    7,
    8,
    8,
    9,
    10
  ],
  "8": [
    0,
    1,
    2,
    3,
    4,
    5,
    5,
    5
  ],
  "9": [
    0,
    0,
    0,
    1,
    2,
    3,
    3,
    3,
    3,
    3,
    4,
    5,
    6,
    7,
    7,
    7,
    8,
    9,
    9,
    9,
    10
  ],
  "10": [
    0,
    1,
    2,
    2,
    3,
    4
  ],
  "quick": [
    0,
    0,
    1,
    2,
    2
  ],
  "standard": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ]
};
