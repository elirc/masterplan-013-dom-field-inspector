# M013: mentor hints and answer directions

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

Use this chapter after making an attempt. It provides reasoning directions and evaluation criteria, not finished feature patches. A learner can choose a different design when the revised contract is explicit and the evidence supports it.

## Retrieval card 01: answer direction

**Question:** Explain normalization through this project

Producing a consistent candidate without silently overwriting the editor.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 02: answer direction

**Question:** Explain error map through this project

Field-keyed information describing ordinary invalid input.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 03: answer direction

**Question:** Explain feedback validity through this project

Whether a message still corresponds to current input.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 04: answer direction

**Question:** Explain adapter effect through this project

A browser action such as focus or setting an attribute.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 05: answer direction

**Question:** Predict: Name contains only spaces; email is valid

Name error, focus on name, email remains untouched

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 06: answer direction

**Question:** Predict: Correct the name and resubmit

Ready to review; no stale name error

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 07: answer direction

**Question:** Predict: a@@example.com

Email format error; no navigation

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 08: answer direction

**Question:** Which value belongs to the source editor and which belongs to the validated result?

The validator owns the field rules and returns data. The adapter owns focus, attributes and messages. This lets a test supply ordinary strings without creating a document and lets the UI preserve what the user actually typed. Normalized output is used for the review sentence, not silently written back into every control.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 09: answer direction

**Question:** What should happen when both fields are invalid?

A complete error map lets a learner see all problems at once, while focus still chooses the first one. An early throw on the first bad field would hide the second error and make a normal correction flow feel like repeated surprises. Expected invalid input is represented as a result, not an application crash.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 10: answer direction

**Question:** Why can clearing an error while editing be different from claiming the new value is valid?

A success sentence is no longer reliable once a field changes. The input handler therefore clears the old result and error attributes. The next submit performs authoritative validation. This is a deliberate submit-time policy, not live validation on every keystroke.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 11: answer direction

**Question:** What does your strongest check not prove?

Use the scope recorded in VERIFICATION.md; do not infer production readiness from a small local fixture.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 12: answer direction

**Question:** Which values come from the DOM and which values have already been validated?

A form has three distinguishable values: what the user typed, the normalized candidate and the feedback about a particular validation attempt. Preserving the first does not prevent using the second. Feedback becomes stale when inputs change. This separation gives you a useful way to reason about focus, correction and data loss before introducing any backend.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Story 07: Add a workshop choice

**First hint:** The desired improvement is “Validate a small known option alongside the two strings.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Add a labeled select; extend the validator's result shape; reject the placeholder without erasing other fields. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A missing choice is distinct from a valid option and correction recovers. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose three fictional workshops. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 08: Add a review cancel action

**First hint:** The desired improvement is “Return to editing without losing typed details.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Define review visibility; keep inputs as the source; clear only the review result on cancel. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Cancel preserves valid and invalid text exactly as typed. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose where focus returns. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 09: Add an error count

**First hint:** The desired improvement is “Summarize the current attempt without storing another total.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Derive the count from the error map; render it with feedback; clear it on editing. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Count matches field errors and is never stale after correction. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose singular and plural messages. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 10: Add a name-format explanation

**First hint:** The desired improvement is “Clarify what the current validator actually accepts.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Show a short input hint; avoid inventing identity restrictions; include Unicode and punctuation examples. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The hint agrees with the nonblank rule and does not claim real identity verification. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose inclusive example names. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 11: Add a safe review rendering probe

**First hint:** The desired improvement is “Verify markup-looking input remains text.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Enter a fictional string containing angle brackets; use text rendering; inspect whether elements are created. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: User-entered markup is displayed as data rather than executed. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a harmless visible test string. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 12: Add an optional note field

**First hint:** The desired improvement is “Practice optional versus invalid values.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Define blank as allowed; normalize the note separately; include it in review only under the chosen policy. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Empty note does not block an otherwise valid form. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a length limit and display policy. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 13: Add a correction journey checklist

**First hint:** The desired improvement is “Test sequences rather than isolated screenshots.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Record both-invalid, one-fixed, both-fixed and edited-after-success states; inspect focus and aria-invalid each time. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Every state names expected feedback and preserved input. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a repeatable keyboard route. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 14: Separate syntax from delivery language

**First hint:** The desired improvement is “Improve misleading email success wording.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Audit all feedback; replace verified-address claims with format-reviewed wording; preserve the validation rule. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: No message implies email was sent or deliverability was checked. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a precise success sentence. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 15: Add a field-order decision note

**First hint:** The desired improvement is “Explain which error receives focus first.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Compare DOM order with error-map construction order; write a two-error fixture; document the chosen rule. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The reported first error and focused control agree. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Decide whether the order should come from an explicit field list. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Mentor feedback rubric

| Dimension | Beginning | Developing | Independent evidence |
|---|---|---|---|
| Trace | Names files only | Follows one ordinary case | Predicts a new boundary and explains its owner |
| Test design | Copies output | Uses a stated expectation | Rejects a plausible wrong candidate |
| Design | Repeats a slogan | Names an alternative | Compares costs using a concrete change |
| Agent use | Accepts a generated answer | Checks suggested edits | Supplies own proposal and adjudicates critiques |
| Handoff | Claims it works | Lists actual checks | Explains behavior, evidence and limits coherently |

Use the rubric to choose the next practice action, not to label yourself permanently. A learner may be independent at source tracing and still need help designing a failure case. Target the missing skill with one smaller exercise.
