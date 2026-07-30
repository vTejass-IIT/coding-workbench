import { describe, it, expect } from "vitest";
import { longestPalindrome } from "./longestPalindromicSubstring";

function isPalindrome(s: string): boolean {
  return s === [...s].reverse().join("");
}

describe("longestPalindrome", () => {
  it("finds a longest palindromic substring (one of possibly several)", () => {
    const result = longestPalindrome("babad");
    expect(["bab", "aba"]).toContain(result);
  });

  it("finds an even-length palindrome", () => {
    expect(longestPalindrome("cbbd")).toBe("bb");
  });

  it("handles a single character", () => {
    expect(longestPalindrome("a")).toBe("a");
  });

  it("returned substring is always a genuine palindrome", () => {
    expect(isPalindrome(longestPalindrome("forgeeksskeegfor"))).toBe(true);
  });
});
