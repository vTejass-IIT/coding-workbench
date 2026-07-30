import { describe, it, expect } from "vitest";
import { wordPattern } from "./wordPattern";

describe("wordPattern", () => {
  it("matches a consistent bijective pattern", () => {
    expect(wordPattern("abba", "dog cat cat dog")).toBe(true);
  });

  it("rejects a pattern where one letter maps to two words", () => {
    expect(wordPattern("abba", "dog cat cat fish")).toBe(false);
  });

  it("rejects mismatched word/pattern lengths", () => {
    expect(wordPattern("abba", "dog cat cat dog dog")).toBe(false);
  });
});
