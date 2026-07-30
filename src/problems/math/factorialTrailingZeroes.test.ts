import { describe, it, expect } from "vitest";
import { trailingZeroes } from "./factorialTrailingZeroes";

describe("trailingZeroes", () => {
  it("counts trailing zeroes for a small factorial", () => {
    expect(trailingZeroes(5)).toBe(1);
  });

  it("counts trailing zeroes where factors of 5 come from higher powers", () => {
    expect(trailingZeroes(25)).toBe(6); // extra zero from 25 = 5^2
  });

  it("returns 0 when n < 5", () => {
    expect(trailingZeroes(3)).toBe(0);
  });
});
