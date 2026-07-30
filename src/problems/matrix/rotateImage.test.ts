import { describe, it, expect } from "vitest";
import { rotate } from "./rotateImage";

describe("rotate", () => {
  it("rotates a 3x3 matrix 90 degrees clockwise", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(rotate(matrix)).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });

  it("rotates a 4x4 matrix 90 degrees clockwise", () => {
    const matrix = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ];
    expect(rotate(matrix)).toEqual([
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ]);
  });

  it("handles a 1x1 matrix", () => {
    expect(rotate([[1]])).toEqual([[1]]);
  });
});
