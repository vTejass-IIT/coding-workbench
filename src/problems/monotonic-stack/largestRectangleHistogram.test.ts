import { describe, it, expect } from "vitest";
import { largestRectangleArea } from "./largestRectangleHistogram";

describe("largestRectangleArea", () => {
  it("finds the largest rectangle in a typical histogram", () => {
    expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toBe(10);
  });

  it("handles a flat histogram", () => {
    expect(largestRectangleArea([2, 2, 2, 2])).toBe(8);
  });

  it("handles a single bar", () => {
    expect(largestRectangleArea([5])).toBe(5);
  });

  it("handles strictly increasing bars", () => {
    expect(largestRectangleArea([1, 2, 3, 4, 5])).toBe(9);
  });
});
