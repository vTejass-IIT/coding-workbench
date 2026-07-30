import { describe, it, expect } from "vitest";
import { matrixReshape } from "./reshapeMatrix";

describe("matrixReshape", () => {
  it("reshapes 2x2 into 1x4", () => {
    expect(
      matrixReshape(
        [
          [1, 2],
          [3, 4],
        ],
        1,
        4
      )
    ).toEqual([[1, 2, 3, 4]]);
  });

  it("returns original matrix when reshape is impossible", () => {
    expect(
      matrixReshape(
        [
          [1, 2],
          [3, 4],
        ],
        2,
        4
      )
    ).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it("reshapes 1x4 into 2x2", () => {
    expect(matrixReshape([[1, 2, 3, 4]], 2, 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
});
