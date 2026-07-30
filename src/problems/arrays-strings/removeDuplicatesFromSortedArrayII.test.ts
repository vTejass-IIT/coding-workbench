import { describe, it, expect } from "vitest";
import { removeDuplicatesII } from "./removeDuplicatesFromSortedArrayII";

describe("removeDuplicatesII", () => {
  it("allows at most two occurrences of each value", () => {
    const nums = [1, 1, 1, 2, 2, 3];
    const k = removeDuplicatesII(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3]);
  });

  it("handles a value appearing more than twice mixed with others", () => {
    const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
    const k = removeDuplicatesII(nums);
    expect(k).toBe(7);
    expect(nums.slice(0, k)).toEqual([0, 0, 1, 1, 2, 3, 3]);
  });

  it("handles an array with no duplicates", () => {
    const nums = [1, 2, 3];
    const k = removeDuplicatesII(nums);
    expect(k).toBe(3);
    expect(nums.slice(0, k)).toEqual([1, 2, 3]);
  });
});
