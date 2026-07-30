import { describe, it, expect } from "vitest";
import { threeSum } from "./threeSum";

function normalize(triplets: number[][]): number[][] {
  return triplets.map((t) => [...t].sort((a, b) => a - b)).sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
}

describe("threeSum", () => {
  it("finds unique triplets summing to zero", () => {
    const result = threeSum([-1, 0, 1, 2, -1, -4]);
    expect(normalize(result)).toEqual(normalize([[-1, -1, 2], [-1, 0, 1]]));
  });

  it("returns empty when no triplet sums to zero", () => {
    expect(threeSum([0, 1, 1])).toEqual([]);
  });

  it("handles an all-zero array", () => {
    expect(normalize(threeSum([0, 0, 0]))).toEqual(normalize([[0, 0, 0]]));
  });
});
