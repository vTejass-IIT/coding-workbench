import { describe, it, expect } from "vitest";
import { rotate } from "./rotateArray";

describe("rotate", () => {
  it("rotates right by k steps", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    rotate(nums, 3);
    expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("handles k larger than array length (wraps around)", () => {
    const nums = [1, 2, 3];
    rotate(nums, 4); // equivalent to k = 1
    expect(nums).toEqual([3, 1, 2]);
  });

  it("handles k = 0 (no-op)", () => {
    const nums = [1, 2, 3];
    rotate(nums, 0);
    expect(nums).toEqual([1, 2, 3]);
  });
});
