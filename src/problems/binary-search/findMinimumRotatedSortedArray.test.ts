import { describe, it, expect } from "vitest";
import { findMin } from "./findMinimumRotatedSortedArray";

describe("findMin", () => {
  it("finds the minimum in a rotated array", () => {
    expect(findMin([3, 4, 5, 1, 2])).toBe(1);
  });

  it("finds the minimum when the array isn't actually rotated", () => {
    expect(findMin([1, 2, 3, 4, 5])).toBe(1);
  });

  it("handles a single element", () => {
    expect(findMin([2])).toBe(2);
  });
});
