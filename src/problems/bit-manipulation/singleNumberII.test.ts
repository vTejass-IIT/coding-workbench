import { describe, it, expect } from "vitest";
import { singleNumber } from "./singleNumberII";

describe("singleNumber (each other value appears 3 times)", () => {
  it("finds the element that appears once", () => {
    expect(singleNumber([2, 2, 3, 2])).toBe(3);
  });

  it("handles a larger set with negative numbers", () => {
    expect(singleNumber([0, 1, 0, 1, 0, 1, 99])).toBe(99);
    expect(singleNumber([-2, -2, -2, -5])).toBe(-5);
  });

  it("handles a single-element array", () => {
    expect(singleNumber([7])).toBe(7);
  });
});
