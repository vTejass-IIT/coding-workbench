import { describe, it, expect } from "vitest";
import { lengthOfLongestSubstring } from "./longestSubstring";

describe("lengthOfLongestSubstring", () => {
  it("finds the longest run of unique chars", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });

  it("handles all repeating chars", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });

  it("handles mixed pattern", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });

  it("handles empty string", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
  });
});
