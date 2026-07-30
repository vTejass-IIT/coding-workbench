import { describe, it, expect } from "vitest";
import { minSubArrayLen } from "./minimumSizeSubarraySum";

describe("minSubArrayLen", () => {
  it("finds the shortest qualifying subarray", () => {
    expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2);
  });

  it("returns 0 when no subarray reaches the target", () => {
    expect(minSubArrayLen(100, [1, 2, 3])).toBe(0);
  });

  it("handles a single element meeting the target exactly", () => {
    expect(minSubArrayLen(4, [1, 4, 4])).toBe(1);
  });
});
