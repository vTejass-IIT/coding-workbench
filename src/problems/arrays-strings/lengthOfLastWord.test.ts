import { describe, it, expect } from "vitest";
import { lengthOfLastWord } from "./lengthOfLastWord";

describe("lengthOfLastWord", () => {
  it("finds the length of the last word", () => {
    expect(lengthOfLastWord("Hello World")).toBe(5);
  });

  it("ignores trailing whitespace", () => {
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
  });

  it("handles a single word with no spaces", () => {
    expect(lengthOfLastWord("word")).toBe(4);
  });
});
