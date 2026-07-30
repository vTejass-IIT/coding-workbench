import { describe, it, expect } from "vitest";
import { merge } from "./mergeSortedArray";

describe("merge", () => {
  it("merges two sorted arrays in place", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    merge(nums1, 3, [2, 5, 6], 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it("handles nums2 fully ahead of nums1's remaining elements", () => {
    const nums1 = [1, 0];
    merge(nums1, 1, [2], 1);
    expect(nums1).toEqual([1, 2]);
  });

  it("handles empty nums1 initial content (m = 0)", () => {
    const nums1 = [0, 0, 0];
    merge(nums1, 0, [1, 2, 3], 3);
    expect(nums1).toEqual([1, 2, 3]);
  });
});
