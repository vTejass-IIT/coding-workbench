import { describe, it, expect } from "vitest";
import { ladderLength } from "./wordLadder";

describe("ladderLength", () => {
  it("finds the shortest transformation sequence length", () => {
    expect(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])).toBe(5);
  });

  it("returns 0 when endWord isn't in wordList", () => {
    expect(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])).toBe(0);
  });

  it("handles a single-step transformation", () => {
    expect(ladderLength("hot", "dot", ["dot"])).toBe(2);
  });
});
