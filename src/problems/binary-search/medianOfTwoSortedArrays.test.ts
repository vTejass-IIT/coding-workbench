import { describe, it, expect } from "vitest";
import { findMedianSortedArrays } from "./medianOfTwoSortedArrays";

describe("findMedianSortedArrays", () => {
  it("computes the median for an odd combined length", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  });

  it("computes the median for an even combined length", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });

  it("handles one array being empty", () => {
    expect(findMedianSortedArrays([], [1])).toBe(1);
  });
});
