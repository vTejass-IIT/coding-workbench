import { describe, it, expect } from "vitest";
import { reverseBits } from "./reverseBits";

describe("reverseBits", () => {
  it("reverses a 32-bit pattern", () => {
    expect(reverseBits(0b00000010100101000001111010011100)).toBe(964176192);
  });

  it("reverses all-ones to all-ones", () => {
    expect(reverseBits(0xffffffff)).toBe(0xffffffff);
  });

  it("reverses 0 to 0", () => {
    expect(reverseBits(0)).toBe(0);
  });
});
