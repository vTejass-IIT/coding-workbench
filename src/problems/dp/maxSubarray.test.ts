import { describe, it, expect } from "vitest";
import { maxSubArray } from "./maxSubarray";

describe("maxSubArray", () => {
  it("finds the max sum in a mixed positive/negative array", () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  it("handles an all-negative array (must still pick a non-empty subarray)", () => {
    expect(maxSubArray([-3, -1, -2])).toBe(-1);
  });

  it("handles an all-positive array", () => {
    expect(maxSubArray([1, 2, 3, 4])).toBe(10);
  });

  it("handles a single element", () => {
    expect(maxSubArray([5])).toBe(5);
  });
});
