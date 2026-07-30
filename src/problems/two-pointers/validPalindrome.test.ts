import { describe, it, expect } from "vitest";
import { isPalindrome } from "./validPalindrome";

describe("isPalindrome", () => {
  it("ignores punctuation, spaces, and case", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  it("returns false for a non-palindrome", () => {
    expect(isPalindrome("race a car")).toBe(false);
  });

  it("treats an empty string (after stripping) as a palindrome", () => {
    expect(isPalindrome(" ")).toBe(true);
  });
});
