import { describe, it, expect } from "vitest";
import { findPeakElement } from "./findPeakElement";

function isPeak(nums: number[], i: number): boolean {
  const left = i === 0 ? -Infinity : nums[i - 1];
  const right = i === nums.length - 1 ? -Infinity : nums[i + 1];
  return nums[i] > left && nums[i] > right;
}

describe("findPeakElement", () => {
  it("finds a peak in a single-peak array", () => {
    const idx = findPeakElement([1, 2, 3, 1]);
    expect(isPeak([1, 2, 3, 1], idx)).toBe(true);
  });

  it("finds any valid peak in a multi-peak array", () => {
    const nums = [1, 2, 1, 3, 5, 6, 4];
    const idx = findPeakElement(nums);
    expect(isPeak(nums, idx)).toBe(true);
  });

  it("handles a single element (trivially a peak)", () => {
    expect(findPeakElement([1])).toBe(0);
  });
});
