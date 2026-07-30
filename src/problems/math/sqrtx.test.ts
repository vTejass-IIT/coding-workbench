import { describe, it, expect } from "vitest";
import { mySqrt } from "./sqrtx";

describe("mySqrt", () => {
  it("rounds down for a non-perfect square", () => {
    expect(mySqrt(8)).toBe(2);
  });

  it("returns the exact root for a perfect square", () => {
    expect(mySqrt(16)).toBe(4);
  });

  it("handles 0 and 1", () => {
    expect(mySqrt(0)).toBe(0);
    expect(mySqrt(1)).toBe(1);
  });
});
