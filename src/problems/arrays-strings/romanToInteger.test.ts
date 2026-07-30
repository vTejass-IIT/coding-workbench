import { describe, it, expect } from "vitest";
import { romanToInt } from "./romanToInteger";

describe("romanToInt", () => {
  it("converts a simple additive numeral", () => {
    expect(romanToInt("III")).toBe(3);
  });

  it("converts a numeral using subtractive notation", () => {
    expect(romanToInt("LVIII")).toBe(58);
  });

  it("converts a numeral with multiple subtractive pairs", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });
});
