# Building DOM Field Inspector, one decision at a time

[Learning route](00-START-HERE.md) · [Code tour](03-CODE-TOUR.md)

This is a reconstruction of how to approach the finished reference. It explains visible design choices; it is not a transcript of hidden reasoning or a claim that a fictional team performed these steps.

## Start from the contract

Submission prevents navigation and validates a trimmed name and a simple email shape. Blank names and malformed addresses receive field-specific errors and focus moves to the first invalid field. Valid input remains in its control. Correcting and resubmitting clears old errors. Nothing is sent; email deliverability and complete address-standard validation are outside this exercise.

The smallest useful result answers this user need: A form author needs immediate feedback about which field failed a simple local rule. Write the examples before choosing file names. Keep the scope small enough that the decisive behavior fits in one trace.

## Step 1: Name the boundaries

Start from the two labeled inputs in public/index.html. Notice novalidate: the workshop owns its submit feedback instead of competing with the browser's built-in error bubble. The email input still communicates its purpose. The instructional regex recognizes a simple shape; do not describe that as proof an address exists.

**Pause and produce evidence:** Name contains only spaces; email is valid. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 2: Keep the core pure

Trace values and errors through validateFields. trim creates normalized strings, while the original object stays unchanged. Empty-after-trim is the meaningful name boundary. A test containing a regular nonempty name cannot distinguish a correct validator from one that accepts spaces as a name.

**Pause and produce evidence:** Correct the name and resubmit. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 3: Render errors accessibly

Follow each error key into the matching paragraph and aria-invalid attribute. aria-describedby connects the field with its explanation. Focus is an effect performed after the result is known; it does not belong inside the pure validator. Verify focus with the keyboard as well as reading a red message.

**Pause and produce evidence:** a@@example.com. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 4: Exercise recovery

Submit a blank name with a valid email, correct only the name and submit again. Then change a successful email into an invalid value. The old success sentence should disappear while editing. These sequences test state transitions, which isolated valid and invalid screenshots would miss.

**Pause and produce evidence:** a@@example.com. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Keep the implementation reviewable

A useful commit has one understandable reason to exist. Separate the initial working slice, the checks that expose its important boundaries, and the teaching material that explains it. The published commits in this repository were assembled from verified working files; they are real commits, not fabricated evidence of a long historical development process. 

For your own variation, commit at a point where the behavior and evidence agree. Describe the trigger, the resulting behavior and the check in the commit message or review note. Avoid mixing a rule change with unrelated formatting because it makes the learning decision harder to see.

## Stop before adding a platform

The next useful improvement is a sharper example or clearer explanation, not a database, account system or framework migration. Add an abstraction only when it names a real repeated responsibility. You should be able to describe what becomes easier to change after the abstraction and what new complexity it introduces.

**Independent design choice from the original brief:** Choose when errors appear and where focus goes.

The reference made one choice, documented in the code tour. You may choose differently in a branch if you first revise the contract and acceptance examples. A deliberate alternative is a stronger learning artifact than an unexplained copy.
