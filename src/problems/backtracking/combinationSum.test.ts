import { describe, it, expect } from "vitest";
import { combinationSum } from "./combinationSum";

function normalize(combos: number[][]): number[][] {
  return combos.map((c) => [...c].sort((a, b) => a - b)).sort((a, b) => a.join() < b.join() ? -1 : 1);
}

describe("combinationSum", () => {
  it("finds combinations allowing repeated use of a candidate", () => {
    const result = combinationSum([2, 3, 6, 7], 7);
    expect(normalize(result)).toEqual(normalize([[2, 2, 3], [7]]));
  });

  it("finds multiple combinations for a larger target", () => {
    const result = combinationSum([2, 3, 5], 8);
    expect(normalize(result)).toEqual(normalize([[2, 2, 2, 2], [2, 3, 3], [3, 5]]));
  });

  it("returns empty when no combination reaches the target", () => {
    expect(combinationSum([5], 3)).toEqual([]);
  });
});
