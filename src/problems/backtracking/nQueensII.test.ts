import { describe, it, expect } from "vitest";
import { totalNQueens } from "./nQueensII";

describe("totalNQueens", () => {
  it("counts solutions for n = 4", () => {
    expect(totalNQueens(4)).toBe(2);
  });

  it("counts the single trivial solution for n = 1", () => {
    expect(totalNQueens(1)).toBe(1);
  });

  it("finds no solution for n = 2 or n = 3", () => {
    expect(totalNQueens(2)).toBe(0);
    expect(totalNQueens(3)).toBe(0);
  });
});
