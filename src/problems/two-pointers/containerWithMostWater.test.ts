import { describe, it, expect } from "vitest";
import { maxArea } from "./containerWithMostWater";

describe("maxArea", () => {
  it("finds the container that holds the most water", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  it("handles two elements", () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  it("handles increasing heights", () => {
    expect(maxArea([1, 2, 3, 4, 5])).toBe(6);
  });
});
