import { describe, it, expect } from "vitest";
import { searchMatrix } from "./searchA2DMatrix";

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

describe("searchMatrix", () => {
  it("finds a target present in the matrix", () => {
    expect(searchMatrix(matrix, 3)).toBe(true);
  });

  it("returns false for a target not present", () => {
    expect(searchMatrix(matrix, 13)).toBe(false);
  });

  it("finds a target at the very start or end", () => {
    expect(searchMatrix(matrix, 1)).toBe(true);
    expect(searchMatrix(matrix, 60)).toBe(true);
  });
});
