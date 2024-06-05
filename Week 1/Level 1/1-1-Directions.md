# JIRA Ticket 11a

**Issue Type:** Bug

**Summary:** Implement Data Type Validation for Form Inputs

**Description:**

We have identified a critical bug in our user input form where users can submit any type of data. This leads to errors in the backend when processing the input because the data types are not as expected. We need to implement a validation function to ensure that only valid strings are accepted from the form inputs before they are sent to the backend.

**Steps to Reproduce:**

Open the user input form.
Enter any non-string data (e.g., a number, null, undefined).
Submit the form.
Observe the errors in the backend logs.

**Acceptance Criteria:**

- The function should accept one parameter: the input data.
- The function should return true if the input data is a string.
- The function should return false if the input data is not a string.
- The function should handle edge cases, such as null, undefined, and numbers.

**Testing Command:**
```
npm run test:11a
```

**Example Function Signature:**

```
function isString(input) {
    // Your code here
}
```

**Example Usage:**

```
console.log(isString("Hello, World!")); // true
console.log(isString(12345)); // false
console.log(isString(null)); // false
console.log(isString(undefined)); // false
console.log(isString("12345")); // true
```

**Priority:** High

**Assignee:** Joe Developer

**Reporter:** QA Team

**Environment:** Production

**Due Date:** [Specify due date]

**Checklist:** <br>
[ ] Implement the function isString.<br>
[ ] Ensure the function passes all example usage tests.<br>
[ ] Test the function with additional edge cases.<br>
[ ] Update any relevant documentation.<br>
[ ] Notify the QA team for re-testing.<br>
