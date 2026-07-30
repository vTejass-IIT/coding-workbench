import { describe, it, expect } from "vitest";
import { setZeroes } from "./setMatrixZeroes";

describe("setZeroes", () => {
  it("zeroes the row and column of each zero element", () => {
    const matrix = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];
    setZeroes(matrix);
    expect(matrix).toEqual([
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ]);
  });

  it("handles multiple zeroes across the matrix", () => {
    const matrix = [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ];
    setZeroes(matrix);
    expect(matrix).toEqual([
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ]);
  });

  it("leaves a matrix with no zeroes unchanged", () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    setZeroes(matrix);
    expect(matrix).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
});
