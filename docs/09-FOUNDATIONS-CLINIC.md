# M013: foundations clinic

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

A form has three distinguishable values: what the user typed, the normalized candidate and the feedback about a particular validation attempt. Preserving the first does not prevent using the second. Feedback becomes stale when inputs change. This separation gives you a useful way to reason about focus, correction and data loss before introducing any backend.

## Start from one visible behavior

Read this contract slowly: Submission prevents navigation and validates a trimmed name and a simple email shape. Blank names and malformed addresses receive field-specific errors and focus moves to the first invalid field. Valid input remains in its control. Correcting and resubmitting clears old errors. Nothing is sent; email deliverability and complete address-standard validation are outside this exercise.

Underline the promised result, circle the input boundary and mark the stated limitation. A junior developer often starts by naming a framework or file. Start instead with an observation that a user could confirm or reject. File names become useful after you know which responsibility you are looking for.

## Clinic 1: Normalization

Producing a consistent candidate without silently overwriting the editor.

**Small experiment:** Compare typed spaces with the trimmed review value.

Find the part of `validateFields` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **normalization** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Compare typed spaces with the trimmed review value.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 2: Error map

Field-keyed information describing ordinary invalid input.

**Small experiment:** Derive the first invalid field from its keys.

Find the part of `validateFields` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **error map** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Derive the first invalid field from its keys.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 3: Feedback validity

Whether a message still corresponds to current input.

**Small experiment:** Edit a field after a successful review.

Find the part of `validateFields` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **feedback validity** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Edit a field after a successful review.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 4: Adapter effect

A browser action such as focus or setting an attribute.

**Small experiment:** Explain why focus does not belong in validateFields.

Find the part of `validateFields` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **adapter effect** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Explain why focus does not belong in validateFields.”? Leave your answer in the session journal before reading the mentor hints.

## Read a real source window

The following is an excerpt from [public/core.js](../public/core.js), beginning at source line 1. It is a reading window, not a standalone runnable exercise. Open the linked file for surrounding declarations and context.

```js
export function validateFields({ name, email }) {
  const values = { name: name.trim(), email: email.trim() };
  const errors = {};
  if (!values.name) errors.name = 'Enter a name, not only spaces.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter an email such as learner@example.com.';
  return { values, errors, valid: Object.keys(errors).length === 0 };
}
```

For each meaningful line, label its job as input interpretation, validation, state ownership, transformation, output or presentation. Some files contain only a subset of those jobs. Do not force the categories onto code that does not perform them. A closing brace is structure, not a separate business rule.

Choose one expression and restate it as a question the program answers. Then choose one expression that merely carries out a consequence of that answer. This separates a product decision from mechanical plumbing. If you cannot explain an operator, isolate a tiny example rather than rewriting the whole function.

## A three-column scratch sheet

| Before | Rule or operation | After |
|---|---|---|
| Write an actual supported input or layout situation | Name the owning function, property or event | Predict the concrete result |
| Change one assumption | State which rule now matters | Predict what changes and what remains stable |
| Use an invalid, missing or unsupported case | Identify the boundary that rejects or handles it | Predict feedback and retained state |

Do not fill the After column by running the reference first. That turns prediction practice into transcription. After predicting, observe the program and put discrepancies in a fourth note below the table. A wrong prediction is useful when you can name the mistaken assumption.

## What understanding looks like

You can locate `validateFields`, explain why the adapter has a separate job, and produce a new counterexample without borrowing one from the tests. You can also say what the reference deliberately does not support. If one of those is missing, choose the smallest clinic above that addresses it and repeat that clinic with different data.
