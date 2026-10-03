# Hints and answer directions

[Return to the stories](05-PRACTICE-STORIES.md)

There are intentionally no complete feature patches here. Use one hint, return to your code and produce evidence. Your design can differ from the reference when you state and verify the new contract.

## Story 01: Add a friendly name length limit

**Hint 1 — ownership:** Begin from `validateFields`. Choose and document a maximum display-name length, counting policy included, in validateFields.

**Hint 2 — reasoning:** Revisit the decision “Return errors instead of editing controls”. Ask yourself: Which value belongs to the source editor and which belongs to the validated result?

**Answer direction:** A defensible solution demonstrates this observable result: A value at the limit passes; one over fails without erasing the email. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 02: Add an error summary

**Hint 1 — ownership:** Begin from `validateFields`. Derive a summary list from the error map and link each entry to its input.

**Hint 2 — reasoning:** Revisit the decision “Validate both fields in one pass”. Ask yourself: What should happen when both fields are invalid?

**Answer direction:** A defensible solution demonstrates this observable result: Two invalid fields produce two reachable entries and no duplicate success message. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 03: Preserve a review snapshot

**Hint 1 — ownership:** Begin from `validateFields`. After successful review, show a clearly labeled normalized snapshot separate from the inputs. Invalidate it on editing.

**Hint 2 — reasoning:** Revisit the decision “Clear stale feedback on input”. Ask yourself: Why can clearing an error while editing be different from claiming the new value is valid?

**Answer direction:** A defensible solution demonstrates this observable result: An edit cannot leave a snapshot presented as current verified input. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 04: Validate on blur as an alternative

**Hint 1 — ownership:** Begin from `validateFields`. Implement a branch with field validation on blur and explain how it differs from submit-time validation.

**Hint 2 — reasoning:** Revisit the decision “Return errors instead of editing controls”. Ask yourself: Which value belongs to the source editor and which belongs to the validated result?

**Answer direction:** A defensible solution demonstrates this observable result: Tabbing out of a bad field gives feedback without moving focus back unexpectedly. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 05: Add a reset action

**Hint 1 — ownership:** Begin from `validateFields`. Clear input values and all error/success state through one reset handler.

**Hint 2 — reasoning:** Revisit the decision “Validate both fields in one pass”. Ask yourself: What should happen when both fields are invalid?

**Answer direction:** A defensible solution demonstrates this observable result: Reset after an error and after success returns the same clean starting state. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 06: Expand email examples honestly

**Hint 1 — ownership:** Begin from `validateFields`. Add fixtures for plus signs, spaces and malformed at-sign placement; document the limited regex contract.

**Hint 2 — reasoning:** Revisit the decision “Clear stale feedback on input”. Ask yourself: Why can clearing an error while editing be different from claiming the new value is valid?

**Answer direction:** A defensible solution demonstrates this observable result: The guide distinguishes format checking from verification or delivery and names unsupported cases. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Answers to the trace questions

Submit → preventDefault → read two strings from controls → validateFields returns normalized values and an error map → app writes each error and aria-invalid → focus first failing field or display review text.

The expected examples are in the concepts table. Use them to check your reasoning, then supply a new example of your own. A copied sentence is not evidence that you can trace a changed input.

## When to ask for more help

Ask after you can show a concrete attempt, a specific uncertainty and an observation. Request a smaller hint before a full patch. If you do accept generated code, explain each changed line and run a counterexample you chose independently.
