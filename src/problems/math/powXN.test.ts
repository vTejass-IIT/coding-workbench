import { describe, it, expect } from "vitest";
import { myPow } from "./powXN";

describe("myPow", () => {
  it("computes a positive integer power", () => {
    expect(myPow(2.0, 10)).toBeCloseTo(1024.0, 5);
  });

  it("computes a negative exponent", () => {
    expect(myPow(2.0, -2)).toBeCloseTo(0.25, 5);
  });

  it("handles n = 0 (always 1)", () => {
    expect(myPow(5.0, 0)).toBe(1);
  });
});
