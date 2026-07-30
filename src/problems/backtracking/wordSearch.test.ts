import { describe, it, expect } from "vitest";
import { exist } from "./wordSearch";

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

describe("exist", () => {
  it("finds a word along an adjacent path", () => {
    expect(exist(board, "ABCCED")).toBe(true);
  });

  it("returns false when the path would require reusing a cell", () => {
    expect(exist(board, "ABCB")).toBe(false);
  });

  it("returns false when the word can't be found at all", () => {
    expect(exist(board, "AAA")).toBe(false);
  });
});
