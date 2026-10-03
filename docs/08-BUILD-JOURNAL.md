# Build journal: DOM Field Inspector

[Code tour](03-CODE-TOUR.md) · [Actual verification](VERIFICATION.md)

This is a retrospective teaching narrative about the implementation in this repository. It is not a verbatim conversation, fabricated team debate or hidden chain-of-thought transcript. The design explanations below are reviewable rationales tied to the source. Dates and check results belong to the verification record.

## The starting problem

A form author needs immediate feedback about which field failed a simple local rule.

The main temptation was to make the project larger than its learning target. The useful boundary is **dom events and validation boundaries**. A finished small example lets you inspect the whole path and ask what each part contributes. Extra infrastructure would add more things to configure before the central idea became clear.

## The first contract

Submission prevents navigation and validates a trimmed name and a simple email shape. Blank names and malformed addresses receive field-specific errors and focus moves to the first invalid field. Valid input remains in its control. Correcting and resubmitting clears old errors. Nothing is sent; email deliverability and complete address-standard validation are outside this exercise.

The contract turned broad intent into examples that can disagree with an implementation. That matters because a plausible-looking result can hide a wrong boundary rule. The examples in the concepts guide were chosen to expose those distinctions, not to make the demo look flawless.

## Decision note 1: Return errors instead of editing controls

The validator owns the field rules and returns data. The adapter owns focus, attributes and messages. This lets a test supply ordinary strings without creating a document and lets the UI preserve what the user actually typed. Normalized output is used for the review sentence, not silently written back into every control.

**What a learner should challenge:** Which value belongs to the source editor and which belongs to the validated result?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 2: Validate both fields in one pass

A complete error map lets a learner see all problems at once, while focus still chooses the first one. An early throw on the first bad field would hide the second error and make a normal correction flow feel like repeated surprises. Expected invalid input is represented as a result, not an application crash.

**What a learner should challenge:** What should happen when both fields are invalid?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 3: Clear stale feedback on input

A success sentence is no longer reliable once a field changes. The input handler therefore clears the old result and error attributes. The next submit performs authoritative validation. This is a deliberate submit-time policy, not live validation on every keystroke.

**What a learner should challenge:** Why can clearing an error while editing be different from claiming the new value is valid?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## What the checks contributed

The pure-function checks exercised the contract independently of the DOM. Browser checks then verified that real controls passed inputs, showed results and recovered from relevant error or empty states. These are complementary forms of evidence.

The record in VERIFICATION.md reports actual local observations. A GitHub Actions workflow is provided, but its remote result must be inspected separately after a push. A screenshot documents one rendered state; it is not a substitute for the interaction and boundary checks.

## What you should do differently on your own build

Start from the same user need but write your own examples first. Choose a small variation from the story list. Predict behavior, implement a slice and compare the result with your prediction. The reference helps you judge a finished result; your journal should record your own uncertainties and discoveries rather than adopting this narrative as if you experienced it.

## The handoff

The next learner can start from README, locate `validateFields`, reproduce the example table and attempt one bounded story. That is the intended handoff quality: a working result plus enough evidence and explanation to continue safely. The six practice stories remain unfinished for the learner.
