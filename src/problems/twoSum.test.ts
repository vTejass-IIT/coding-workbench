import { describe, it, expect } from "vitest";
import { twoSum } from "./twoSum";

describe("twoSum", () => {
  it("returns indices of the two numbers that add up to target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("handles no solution", () => {
    expect(twoSum([1, 2, 3], 100)).toEqual([]);
  });
});
