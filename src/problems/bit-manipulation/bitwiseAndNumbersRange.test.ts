import { describe, it, expect } from "vitest";
import { rangeBitwiseAnd } from "./bitwiseAndNumbersRange";

describe("rangeBitwiseAnd", () => {
  it("computes the AND across a range spanning a bit boundary", () => {
    expect(rangeBitwiseAnd(5, 7)).toBe(4);
  });

  it("returns 0 when the range spans a power-of-two boundary widely", () => {
    expect(rangeBitwiseAnd(0, 1)).toBe(0);
  });

  it("returns the value itself when left equals right", () => {
    expect(rangeBitwiseAnd(9, 9)).toBe(9);
  });
});
