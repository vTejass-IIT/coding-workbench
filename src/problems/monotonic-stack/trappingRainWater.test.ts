import { describe, it, expect } from "vitest";
import { trap } from "./trappingRainWater";

describe("trap", () => {
  it("computes trapped water for a typical elevation map", () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });

  it("returns 0 when no water can be trapped", () => {
    expect(trap([1, 2, 3, 4, 5])).toBe(0);
  });

  it("handles a flat elevation map", () => {
    expect(trap([3, 3, 3])).toBe(0);
  });

  it("handles an empty array", () => {
    expect(trap([])).toBe(0);
  });
});
