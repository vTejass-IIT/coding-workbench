import { describe, it, expect } from "vitest";
import { hammingWeight } from "./numberOf1Bits";

describe("hammingWeight", () => {
  it("counts set bits in a mixed pattern", () => {
    expect(hammingWeight(11)).toBe(3);
  });

  it("counts all 32 bits set", () => {
    expect(hammingWeight(0xffffffff)).toBe(32);
  });

  it("counts zero set bits", () => {
    expect(hammingWeight(0)).toBe(0);
  });
});
