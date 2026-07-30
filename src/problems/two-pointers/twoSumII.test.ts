import { describe, it, expect } from "vitest";
import { twoSum } from "./twoSumII";

describe("twoSum (sorted input)", () => {
  it("finds the 1-indexed pair that sums to target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });

  it("handles negative numbers", () => {
    expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
  });

  it("handles the pair being at the ends of the array", () => {
    expect(twoSum([1, 2, 3, 4, 4], 8)).toEqual([4, 5]);
  });
});
