import { describe, it, expect } from "vitest";
import { findWords } from "./wordSearchII";

describe("findWords", () => {
  it("finds all words present on the board", () => {
    const board = [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ];
    const result = findWords(board, ["oath", "pea", "eat", "rain"]);
    expect(result.slice().sort()).toEqual(["eat", "oath"]);
  });

  it("returns empty when no word is present", () => {
    const board = [["a", "b"], ["c", "d"]];
    expect(findWords(board, ["abcd", "dcba"])).toEqual([]);
  });

  it("does not reuse the same cell twice within a word", () => {
    const board = [["a", "a"]];
    expect(findWords(board, ["aaa"])).toEqual([]);
  });
});
