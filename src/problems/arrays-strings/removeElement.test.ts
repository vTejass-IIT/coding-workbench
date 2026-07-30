import { describe, it, expect } from "vitest";
import { removeElement } from "./removeElement";

function normalize(nums: number[], k: number): number[] {
  return nums.slice(0, k).sort((a, b) => a - b);
}

describe("removeElement", () => {
  it("removes all occurrences of val", () => {
    const nums = [3, 2, 2, 3];
    const k = removeElement(nums, 3);
    expect(k).toBe(2);
    expect(normalize(nums, k)).toEqual([2, 2]);
  });

  it("handles val not present", () => {
    const nums = [1, 2, 3];
    const k = removeElement(nums, 5);
    expect(k).toBe(3);
    expect(normalize(nums, k)).toEqual([1, 2, 3]);
  });

  it("handles empty array", () => {
    expect(removeElement([], 1)).toBe(0);
  });
});
