# JIRA Ticket 11b
**Issue Type:** Enhancement

**Summary:** Implement Data Length Validation for Form Inputs

**Description:**

To improve the security and performance of our application, we need to implement a validation function that checks the length of input data from user forms. This function should ensure that inputs do not exceed predefined length limits to prevent potential issues such as buffer overflows, database errors, and performance degradation.


**Acceptance Criteria:**

- The function should accept two parameters: the input data and the maximum allowed length.
- The function should return true if the input data length is within the specified limit.
- The function should return false if the input data length exceeds the specified limit.
- The function should handle edge cases, such as null, undefined, and inputs with length exactly equal to the maximum allowed length.


**Example Function Signature:**

```
function isValidLength(input, maxLength) {
    // Your code here
}
```

**Example Usage:**

```
console.log(isValidLength("Hello, World!", 20)); // true
console.log(isValidLength("This is a very long input string that exceeds the limit", 20)); // false
console.log(isValidLength("", 5)); // true
console.log(isValidLength(null, 10)); // false
console.log(isValidLength("12345", 5)); // true
console.log(isValidLength(undefined, 10)); // false
console.log(isValidLength(12345, 10)); // false
```

**Priority:** Medium

**Assignee:** Joe Developer

**Reporter:** QA Team

**Environment:** Production

**Due Date:** [Specify due date]

**Checklist:** <br>
[ ] Implement the function isValidLength.<br>
[ ] Ensure the function passes all example usage tests..<br>
[ ] Test the function with additional edge cases (null, undefined, non-string inputs, negative maxLength, etc.).<br>
[ ] Update any relevant documentation.<br>
[ ] Notify the QA team for re-testing.<br>

**Commands to Run Test:** <br>
To ensure the validation function works correctly, run the following command in your development environment: <br>
```
npm run test:11b
```
