import { describe, it, expect } from "vitest";
import { generateMatrix } from "./spiralMatrixII";

describe("generateMatrix", () => {
  it("fills a 3x3 matrix in spiral order", () => {
    expect(generateMatrix(3)).toEqual([
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ]);
  });

  it("handles n=1", () => {
    expect(generateMatrix(1)).toEqual([[1]]);
  });

  it("fills a 4x4 matrix in spiral order", () => {
    expect(generateMatrix(4)).toEqual([
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ]);
  });
});
