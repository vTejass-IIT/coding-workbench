import { describe, it, expect } from "vitest";
import { singleNumber } from "./singleNumber";

describe("singleNumber", () => {
  it("finds the element that appears once", () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
  });

  it("handles a single-element array", () => {
    expect(singleNumber([1])).toBe(1);
  });

  it("handles negative numbers", () => {
    expect(singleNumber([-1, -1, -2])).toBe(-2);
  });
});
