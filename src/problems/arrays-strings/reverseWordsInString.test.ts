import { describe, it, expect } from "vitest";
import { reverseWords } from "./reverseWordsInString";

describe("reverseWords", () => {
  it("reverses word order", () => {
    expect(reverseWords("the sky is blue")).toBe("blue is sky the");
  });

  it("collapses leading/trailing and multiple internal spaces", () => {
    expect(reverseWords("  hello   world  ")).toBe("world hello");
  });

  it("handles a single word", () => {
    expect(reverseWords("word")).toBe("word");
  });
});
