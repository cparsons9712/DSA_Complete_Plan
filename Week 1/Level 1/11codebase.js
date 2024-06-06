/*
Welcome to your first DSA Worksheet!
5 days a week you'll come here, solve your problem and then
check that problem off of your study plan! This course should be
done at your own pace, if it takes a few days to understand a concept
that was planned to take one day its okay!
*/

/*********************

JIRA Ticket 11a

**********************/
export const isString = (input) => {
  // your code here
};

/**********************

JIRA Ticket 1-2

**********************/
export const isValidLength = (input, maxLength) => {
  // Check if the input is null or undefined
  if (input === null || input === undefined) {
    return false;
  }

  // Ensure the input is a string
  if (typeof input !== "string") {
    return false;
  }

  // Check if the input length is within the specified limit
  return input.length <= maxLength;
};
