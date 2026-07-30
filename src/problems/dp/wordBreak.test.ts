import { describe, it, expect } from "vitest";
import { wordBreak } from "./wordBreak";

describe("wordBreak", () => {
  it("segments a string using dictionary words", () => {
    expect(wordBreak("leetcode", ["leet", "code"])).toBe(true);
  });

  it("allows reusing a dictionary word multiple times", () => {
    expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])).toBe(false);
  });

  it("requires reuse of a word to succeed", () => {
    expect(wordBreak("applepenapple", ["apple", "pen"])).toBe(true);
  });
});
