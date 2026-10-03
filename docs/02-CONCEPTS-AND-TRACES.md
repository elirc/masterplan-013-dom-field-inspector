# Concepts and worked traces

[Walkthrough](01-BUILD-WALKTHROUGH.md) · [Debugging lab](04-DEBUGGING-LAB.md)

## The exact contract

Submission prevents navigation and validates a trimmed name and a simple email shape. Blank names and malformed addresses receive field-specific errors and focus moves to the first invalid field. Valid input remains in its control. Correcting and resubmitting clears old errors. Nothing is sent; email deliverability and complete address-standard validation are outside this exercise.

This paragraph is the reference behavior. If you extend the product, update the contract and examples together. An implementation can be internally consistent while solving the wrong problem, so start with the user's meaning before discussing syntax.

## A complete trace

Submit → preventDefault → read two strings from controls → validateFields returns normalized values and an error map → app writes each error and aria-invalid → focus first failing field or display review text.

Copy that trace onto paper. At each arrow, name the input, the owner of the rule or state, and the output. For browser layout, the owner is a CSS rule acting on a particular box. For JavaScript, it may be a local variable, a returned object or a callback. For Git, it is a specific snapshot comparison. These are different mechanisms but the same useful habit: make the boundary visible.

## Examples you can verify independently

| Input or situation | Expected observation |
|---|---|
| Name contains only spaces; email is valid | Name error, focus on name, email remains untouched |
| Correct the name and resubmit | Ready to review; no stale name error |
| a@@example.com | Email format error; no navigation |

Do not derive the expected result by copying the implementation into your test. Use the user rule, a hand calculation, a source-order trace or a deliberately simple fixture. Otherwise two copies of the same mistake can agree while the product is wrong.

## Contrast three kinds of statement

**Requirement:** what the user should be able to rely on. **Implementation:** how the current files attempt to provide it. **Evidence:** the input and observation that support a conclusion about that attempt. In your journal, write one example of each for this project. A source comment is useful explanation, but by itself it is not runtime evidence.

## Retrieval practice

1. Explain `validateFields` to a learner who knows the preceding project but has not opened this one.
2. Reproduce the trace with one changed input or piece of content. Predict which intermediate fact changes first.
3. Name a result that would look plausible but violate the contract.
4. Identify the smallest counterexample that distinguishes correct from incorrect behavior.
5. State one limitation of the reference without treating that limitation as a hidden completed feature.

Write your answers before opening the hints. Then compare explanations, not just vocabulary. If your answer says “it works because JavaScript/CSS/Git handles it,” identify the particular rule that actually explains the result.

## Transfer beyond this example

Which values come from the DOM and which values have already been validated?

Connect your answer to a future application: a form, a list, a report or a reusable component. The useful transfer is the reasoning habit, not the fictional domain. For example, deciding equality at a boundary is useful in both dates and temperature ranges; distinguishing identity from a label applies to more than score sheets.

## Reference reading

Use [Official platform reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event) to confirm terminology and language/platform behavior. The workshop's product rules and fixtures are original teaching choices, not quotations from that reference. Return to the actual source after reading the documentation and explain which line or rule the terminology helps you understand.
