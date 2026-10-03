# M013: practice stories 07–15

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

These nine proposals extend the original six stories. They are intentionally not implemented in the reference. Each plan gives you boundaries and a route, while leaving the actual patch, exact fixtures and a product decision to you. Start with one story; do not bundle all nine into a single difficult-to-review change.

## Story 07: Add a workshop choice

**User story:** As a user or learner of DOM Field Inspector, I want to validate a small known option alongside the two strings so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** A missing choice is distinct from a valid option and correction recovers.

**Decision you own:** Choose three fictional workshops. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `validateFields` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **A missing choice is distinct from a valid option and correction recovers.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Add a labeled select.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Extend the validator's result shape.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Reject the placeholder without erasing other fields.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “A missing choice is distinct from a valid option and correction recovers.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 07: Add a workshop choice in DOM Field Inspector.
Acceptance requirement: A missing choice is distinct from a valid option and correction recovers.
My unresolved choice: Choose three fictional workshops.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 08: Add a review cancel action

**User story:** As a user or learner of DOM Field Inspector, I want to return to editing without losing typed details so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** Cancel preserves valid and invalid text exactly as typed.

**Decision you own:** Choose where focus returns. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `validateFields` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **Cancel preserves valid and invalid text exactly as typed.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Define review visibility.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Keep inputs as the source.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Clear only the review result on cancel.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “Cancel preserves valid and invalid text exactly as typed.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 08: Add a review cancel action in DOM Field Inspector.
Acceptance requirement: Cancel preserves valid and invalid text exactly as typed.
My unresolved choice: Choose where focus returns.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 09: Add an error count

**User story:** As a user or learner of DOM Field Inspector, I want to summarize the current attempt without storing another total so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** Count matches field errors and is never stale after correction.

**Decision you own:** Choose singular and plural messages. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `validateFields` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **Count matches field errors and is never stale after correction.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Derive the count from the error map.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Render it with feedback.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Clear it on editing.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “Count matches field errors and is never stale after correction.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 09: Add an error count in DOM Field Inspector.
Acceptance requirement: Count matches field errors and is never stale after correction.
My unresolved choice: Choose singular and plural messages.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 10: Add a name-format explanation

**User story:** As a user or learner of DOM Field Inspector, I want to clarify what the current validator actually accepts so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** The hint agrees with the nonblank rule and does not claim real identity verification.

**Decision you own:** Choose inclusive example names. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `validateFields` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **The hint agrees with the nonblank rule and does not claim real identity verification.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Show a short input hint.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Avoid inventing identity restrictions.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Include Unicode and punctuation examples.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “The hint agrees with the nonblank rule and does not claim real identity verification.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 10: Add a name-format explanation in DOM Field Inspector.
Acceptance requirement: The hint agrees with the nonblank rule and does not claim real identity verification.
My unresolved choice: Choose inclusive example names.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 11: Add a safe review rendering probe

**User story:** As a user or learner of DOM Field Inspector, I want to verify markup-looking input remains text so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** User-entered markup is displayed as data rather than executed.

**Decision you own:** Choose a harmless visible test string. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `validateFields` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **User-entered markup is displayed as data rather than executed.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Enter a fictional string containing angle brackets.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Use text rendering.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Inspect whether elements are created.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “User-entered markup is displayed as data rather than executed.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 11: Add a safe review rendering probe in DOM Field Inspector.
Acceptance requirement: User-entered markup is displayed as data rather than executed.
My unresolved choice: Choose a harmless visible test string.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 12: Add an optional note field

**User story:** As a user or learner of DOM Field Inspector, I want to practice optional versus invalid values so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** Empty note does not block an otherwise valid form.

**Decision you own:** Choose a length limit and display policy. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `validateFields` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **Empty note does not block an otherwise valid form.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Define blank as allowed.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Normalize the note separately.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Include it in review only under the chosen policy.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “Empty note does not block an otherwise valid form.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 12: Add an optional note field in DOM Field Inspector.
Acceptance requirement: Empty note does not block an otherwise valid form.
My unresolved choice: Choose a length limit and display policy.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 13: Add a correction journey checklist

**User story:** As a user or learner of DOM Field Inspector, I want to test sequences rather than isolated screenshots so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** Every state names expected feedback and preserved input.

**Decision you own:** Choose a repeatable keyboard route. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `validateFields` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **Every state names expected feedback and preserved input.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Record both-invalid, one-fixed, both-fixed and edited-after-success states.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Inspect focus and aria-invalid each time.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “Every state names expected feedback and preserved input.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 13: Add a correction journey checklist in DOM Field Inspector.
Acceptance requirement: Every state names expected feedback and preserved input.
My unresolved choice: Choose a repeatable keyboard route.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 14: Separate syntax from delivery language

**User story:** As a user or learner of DOM Field Inspector, I want to improve misleading email success wording so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** No message implies email was sent or deliverability was checked.

**Decision you own:** Choose a precise success sentence. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `validateFields` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **No message implies email was sent or deliverability was checked.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Audit all feedback.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Replace verified-address claims with format-reviewed wording.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Preserve the validation rule.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “No message implies email was sent or deliverability was checked.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 14: Separate syntax from delivery language in DOM Field Inspector.
Acceptance requirement: No message implies email was sent or deliverability was checked.
My unresolved choice: Choose a precise success sentence.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 15: Add a field-order decision note

**User story:** As a user or learner of DOM Field Inspector, I want to explain which error receives focus first so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** The reported first error and focused control agree.

**Decision you own:** Decide whether the order should come from an explicit field list. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `validateFields` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **The reported first error and focused control agree.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Compare DOM order with error-map construction order.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Write a two-error fixture.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Document the chosen rule.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “The reported first error and focused control agree.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 15: Add a field-order decision note in DOM Field Inspector.
Acceptance requirement: The reported first error and focused control agree.
My unresolved choice: Decide whether the order should come from an explicit field list.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.
