import { describe, it, expect } from "vitest";
import { maxSubarraySumCircular } from "./maxSumCircularSubarray";

describe("maxSubarraySumCircular", () => {
  it("finds the max sum via wrap-around", () => {
    expect(maxSubarraySumCircular([5, -3, 5])).toBe(10);
  });

  it("finds the max sum without needing to wrap", () => {
    expect(maxSubarraySumCircular([1, -2, 3, -2])).toBe(3);
  });

  it("handles all-negative input (must still pick a non-empty subarray)", () => {
    expect(maxSubarraySumCircular([-3, -2, -3])).toBe(-2);
  });
});
