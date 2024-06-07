# JIRA Ticket 11C
**Issue Type:** Feature

**Summary:** Implement Function to Extract Initials from Full Name

**Description:**
To generate a unique username for user registration, the system needs a function that extracts the initials from a full name. This function should take a full name as input and return the initials as a string. This is essential for creating concise and identifiable usernames.



**Acceptance Criteria:**

- The function should accept one parameter: the full name of the user (a string).
- The function should return a string containing the initials of the name.
- The function should handle edge cases, such as single-word names, names with multiple spaces, and empty strings.
- The function should ignore non-alphabetic characters in the name.


**Example Function Signature:**

```
function getInitials(fullName) {
    // Your code here
}
```

**Example Usage:**

```
console.log(getInitials("John Doe")); // "JD"
console.log(getInitials("Alice Bob Carol")); // "ABC"
console.log(getInitials("  John   Doe ")); // "JD"
console.log(getInitials("Alice-Bob Carol")); // "ABC"
console.log(getInitials("")); // ""
console.log(getInitials("Single")); // "S"
```

**Priority:** Medium

**Assignee:** Joe Developer

**Reporter:** QA Team

**Environment:** Production

**Due Date:** [Specify due date]

**Checklist:** <br>
[ ] Implement the function getInitials.
<br>
[ ] Ensure the function passes all example usage tests.<br>
[ ] Test the function with additional edge cases (single-word names, names with multiple spaces, non-alphabetic characters, etc.).<br>
[ ] Update any relevant documentation.<br>
[ ] Notify the QA team for re-testing.<br>

**Commands to Run Test:** <br>
To ensure the validation function works correctly, run the following command in your development environment: <br>
```
npm run test:11c
```
