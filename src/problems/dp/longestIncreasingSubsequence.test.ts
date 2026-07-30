import { describe, it, expect } from "vitest";
import { lengthOfLIS } from "./longestIncreasingSubsequence";

describe("lengthOfLIS", () => {
  it("finds the longest increasing subsequence length", () => {
    expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
  });

  it("handles a strictly decreasing array (LIS length 1)", () => {
    expect(lengthOfLIS([5, 4, 3, 2, 1])).toBe(1);
  });

  it("handles an array that is entirely increasing", () => {
    expect(lengthOfLIS([1, 2, 3, 4])).toBe(4);
  });
});
