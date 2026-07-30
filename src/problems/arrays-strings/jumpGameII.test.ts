import { describe, it, expect } from "vitest";
import { jump } from "./jumpGameII";

describe("jump", () => {
  it("finds the minimum number of jumps", () => {
    expect(jump([2, 3, 1, 1, 4])).toBe(2);
  });

  it("handles a single-element array (already there, 0 jumps)", () => {
    expect(jump([0])).toBe(0);
  });

  it("handles an array requiring one jump per step", () => {
    expect(jump([1, 1, 1, 1])).toBe(3);
  });
});
