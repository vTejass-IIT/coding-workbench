import { describe, it, expect } from "vitest";
import { spiralOrder } from "./spiralMatrix";

describe("spiralOrder", () => {
  it("traverses a square matrix in spiral order", () => {
    expect(
      spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  it("traverses a non-square matrix in spiral order", () => {
    expect(
      spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ])
    ).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
  });

  it("handles a single row", () => {
    expect(spiralOrder([[1, 2, 3]])).toEqual([1, 2, 3]);
  });

  it("handles a single column", () => {
    expect(spiralOrder([[1], [2], [3]])).toEqual([1, 2, 3]);
  });
});
