import { describe, it, expect } from "vitest";
import { isPalindrome } from "./palindromeNumber";

describe("isPalindrome", () => {
  it("recognizes a palindromic number", () => {
    expect(isPalindrome(121)).toBe(true);
  });

  it("rejects a negative number", () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  it("rejects a non-palindromic number", () => {
    expect(isPalindrome(10)).toBe(false);
  });
});
