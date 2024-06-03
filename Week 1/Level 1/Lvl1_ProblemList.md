Problem 1: Validate User Input
Scenario: Joe needs to validate that the data users input is the correct datatype to send into the backend. Write a function that checks if the input is a string and return true / false.

Problem Statement:
Write a function isString(input) that takes a single argument and returns true if the input is a string, and false otherwise.


def isString(input):
    return isinstance(input, str)

# Example Usage:
# isString("Hello World") -> True
# isString(123) -> False



Problem 2: Count Characters in a String
Scenario: A content management system needs to display the number of characters in a user's bio to ensure it doesn't exceed the allowed limit. Write a function to count the characters in a given string.

Problem Statement:
Write a function countCharacters(bio) that takes a single argument bio (a string) and returns the number of characters in the string.

python
Copy code
def countCharacters(bio):
    return len(bio)

# Example Usage:
# countCharacters("Hello World") -> 11
# countCharacters("") -> 0
Problem 3: Extract Initials
Scenario: A user registration form captures the full name of a user, and the system needs to generate a unique username by extracting the initials. Write a function to extract the initials from a full name.

Problem Statement:
Write a function getInitials(fullName) that takes a single argument fullName (a string) and returns a string containing the initials of the name.

python
Copy code
def getInitials(fullName):
    parts = fullName.split()
    initials = ''.join([part[0] for part in parts])
    return initials.upper()

# Example Usage:
# getInitials("John Doe") -> "JD"
# getInitials("Alice Bob Carter") -> "ABC"
Problem 4: Check for Substring
Scenario: A search function needs to determine if a keyword is present in a larger text. Write a function to check if one string is a substring of another.

Problem Statement:
Write a function containsSubstring(text, keyword) that takes two arguments text and keyword (both strings) and returns true if keyword is found within text, and false otherwise.

python
Copy code
def containsSubstring(text, keyword):
    return keyword in text

# Example Usage:
# containsSubstring("Hello World", "World") -> True
# containsSubstring("Hello World", "world") -> False
Problem 5: Find First Non-Repeating Character
Scenario: In a chat application, it’s useful to identify the first non-repeating character in a message to highlight it. Write a function to find the first non-repeating character in a string.

Problem Statement:
Write a function firstNonRepeatingCharacter(message) that takes a single argument message (a string) and returns the first non-repeating character. If all characters repeat, return an empty string.

python
Copy code
def firstNonRepeatingCharacter(message):
    char_count = {}
    for char in message:
        char_count[char] = char_count.get(char, 0) + 1

    for char in message:
        if char_count[char] == 1:
            return char
    return ''

# Example Usage:
# firstNonRepeatingCharacter("swiss") -> "w"
# firstNonRepeatingCharacter("aabbcc") -> ""
