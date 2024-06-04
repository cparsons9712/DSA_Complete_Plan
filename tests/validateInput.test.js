// tests/validateInput.test.js
import { test, expect } from "@playwright/test";
import { isString } from "../Week 1/Level 1/1-1-Worksheet";

test.describe("Input Validation Tests", () => {
  test("should return true for valid strings", async () => {
    expect(isString("Hello, World!")).toBe(true);
    expect(isString("12345")).toBe(true);
  });

  test("should return false for non-string values", async () => {
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
