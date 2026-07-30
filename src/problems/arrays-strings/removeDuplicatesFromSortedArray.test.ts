import { describe, it, expect } from "vitest";
import { removeDuplicates } from "./removeDuplicatesFromSortedArray";

describe("removeDuplicates", () => {
  it("collapses runs of duplicates to a single occurrence", () => {
    const nums = [1, 1, 2];
    const k = removeDuplicates(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([1, 2]);
  });

  it("handles a longer array with multiple duplicate runs", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4]);
  });

  it("handles an array with no duplicates", () => {
    const nums = [1, 2, 3];
    const k = removeDuplicates(nums);
    expect(k).toBe(3);
    expect(nums.slice(0, k)).toEqual([1, 2, 3]);
  });
});
