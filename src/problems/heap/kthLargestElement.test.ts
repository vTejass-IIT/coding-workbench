import { describe, it, expect } from "vitest";
import { findKthLargest } from "./kthLargestElement";

describe("findKthLargest", () => {
  it("finds the kth largest with duplicates present", () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
  });

  it("finds the 2nd largest", () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  });

  it("handles k = 1 (the maximum)", () => {
    expect(findKthLargest([7, 1, 9, 3], 1)).toBe(9);
  });
});
