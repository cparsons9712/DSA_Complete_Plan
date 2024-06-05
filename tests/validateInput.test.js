// tests/validateInput.test.js
import { test, expect } from "@playwright/test";
import { isString, isValidLength } from "../Week 1/Level 1/1-1-Worksheet";

test.describe("11a", () => {
  test("should return true for valid strings", async () => {
    expect(isString("Hello, World!")).toBe(true);
    expect(isString("12345")).toBe(true);
  });

  test("1-2", async () => {
    expect(isString(12345)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
  });

  test("should handle edge cases", async () => {
    expect(isString("")).toBe(true); // Empty string is still a string
    expect(isString([])).toBe(false); // Array is not a string
    expect(isString({})).toBe(false); // Object is not a string
    expect(isString(true)).toBe(false); // Boolean is not a string
  });
});

test.describe("11b", () => {
  test("should return true for strings with a valid length", async () => {
    expect(isValidLength("Hello, World!", 20)).toBe(true);
    expect(isValidLength("12345", 20)).toBe(true);
    expect(
      isValidLength(
        "Hello! Thank you for using Daily DSA!! I am so happy you are here and benefiting from my dream and vision.",
        110
      )
    ).toBe(true);
  });

  // test("should return false for strings that are too long", async () => {
  //   expect(isString(12345)).toBe(false);
  //   expect(isString(null)).toBe(false);
  //   expect(isString(undefined)).toBe(false);
  // });

  // test("should handle edge cases", async () => {
  //   expect(isString("")).toBe(true); // Empty string is still a string
  //   expect(isString([])).toBe(false); // Array is not a string
  //   expect(isString({})).toBe(false); // Object is not a string
  //   expect(isString(true)).toBe(false); // Boolean is not a string
  // });
});
