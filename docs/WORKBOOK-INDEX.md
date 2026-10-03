# M013: expanded learning workshop

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

This second learning edition extends the original companion. The working implementation is unchanged. The original six stories plus nine new stories give you **15 unfinished practice stories**. The new chapters add guided reconstruction, explicit test design, worked debugging routes, decision reviews and repeated recall. None of the proposed features is silently claimed as implemented.

## Choose a route instead of reading everything first

If syntax still feels unfamiliar, begin with the foundations clinic and one ordinary trace. If you can explain the reference, choose one story and consult only the relevant sections. If you already implemented a variation, use the test-design and review workshops to challenge it. The aim is increasing independence, not completing a reading quota.

**Current learning target:** DOM events and validation boundaries. Pair this with existing curriculum #13, [groktuts-web-dev-upskilling-lab](https://github.com/elirc/groktuts-web-dev-upskilling-lab). The broader MASTERPLAN checkpoint is #13.

## What to keep saying in your own words

A form has three distinguishable values: what the user typed, the normalized candidate and the feedback about a particular validation attempt. Preserving the first does not prevent using the second. Feedback becomes stale when inputs change. This separation gives you a useful way to reason about focus, correction and data loss before introducing any backend.

## Chapter map

- [Foundations clinic: vocabulary, diagrams and small predictions](09-FOUNDATIONS-CLINIC.md)
- [Guided rebuild: reconstruct the contract in small slices](10-GUIDED-REBUILD-SESSIONS.md)
- [Stories 07–15: nine additional implementation workshops](11-NINE-MORE-STORIES.md)
- [Debugging casebook: hypotheses, experiments and recovery](12-DEBUGGING-CASEBOOK.md)
- [Agentic practice: bounded prompts and independent review](13-AGENTIC-PRACTICE-PLAYBOOK.md)
- [Retrieval workbook: repeated recall with changed examples](14-RETRIEVAL-AND-TRANSFER.md)
- [Architecture lab: compare alternatives with evidence](15-ARCHITECTURE-DECISION-LAB.md)
- [Test design: oracles, boundaries and useful failures](16-TEST-DESIGN-WORKSHOP.md)
- [Companion journal: twelve guided learning sessions](17-SESSION-JOURNAL.md)
- [Independent capstone: a variation you own](18-INDEPENDENT-CAPSTONE.md)
- [Review and handoff: explain a trustworthy change](19-REVIEW-AND-HANDOFF.md)
- [Mentor hints: answer directions after your attempt](20-MENTOR-HINTS.md)

## All fifteen stories

Stories 01–06 remain in [the original practice chapter](05-PRACTICE-STORIES.md), now with added planning checkpoints. Stories 07–15 are in [the new implementation workshops](11-NINE-MORE-STORIES.md). Each includes a bounded plan, acceptance evidence, a choice for you to make, a review route and a saved coaching prompt.

| Story | Exercise | Where |
|---|---|---|
| 01 | Add a friendly name length limit | Original practice chapter |
| 02 | Add an error summary | Original practice chapter |
| 03 | Preserve a review snapshot | Original practice chapter |
| 04 | Validate on blur as an alternative | Original practice chapter |
| 05 | Add a reset action | Original practice chapter |
| 06 | Expand email examples honestly | Original practice chapter |
| 07 | Add a workshop choice | Nine more stories |
| 08 | Add a review cancel action | Nine more stories |
| 09 | Add an error count | Nine more stories |
| 10 | Add a name-format explanation | Nine more stories |
| 11 | Add a safe review rendering probe | Nine more stories |
| 12 | Add an optional note field | Nine more stories |
| 13 | Add a correction journey checklist | Nine more stories |
| 14 | Separate syntax from delivery language | Nine more stories |
| 15 | Add a field-order decision note | Nine more stories |

## How repetition is used

The same important idea reappears as a definition, a concrete prediction, a failure diagnosis, a feature decision and a later recall question. Those are different tasks. Do not count rereading the same sentence five times as five successful retrieval attempts. Close the explanation, change one input or condition, and produce a new answer before checking it.

Work in short sessions and leave a specific next action in your journal. A useful stopping point might be one explained trace, one confirmed hypothesis or one reviewed acceptance example. You do not need to implement every optional extension before progressing to the next project.

## Evidence labels

The existing verification record describes checks actually run against the reference. New casebook incidents are hypothetical training scenarios. Saved prompts are instructions for future use, not records of assistant conversations that already happened. Journal fields are blank on purpose. Distinguish reference evidence, your current observation and a proposed experiment whenever you write about the project.
