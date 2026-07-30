import { describe, it, expect } from "vitest";
import { isValidSudoku } from "./validSudoku";

const validBoard = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

describe("isValidSudoku", () => {
  it("accepts a valid partially-filled board", () => {
    expect(isValidSudoku(validBoard)).toBe(true);
  });

  it("rejects a board with a duplicate in a column", () => {
    const board = validBoard.map((row) => [...row]);
    board[0][0] = "8"; // duplicates the 8 already in column 0
    expect(isValidSudoku(board)).toBe(false);
  });

  it("rejects a board with a duplicate in a 3x3 box", () => {
    const board = validBoard.map((row) => [...row]);
    board[0][1] = "5"; // duplicates the 5 at (0,0) within the same box
    expect(isValidSudoku(board)).toBe(false);
  });
});
