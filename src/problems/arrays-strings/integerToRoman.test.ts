import { describe, it, expect } from "vitest";
import { intToRoman } from "./integerToRoman";

describe("intToRoman", () => {
  it("converts a simple additive value", () => {
    expect(intToRoman(3)).toBe("III");
  });

  it("converts a value needing subtractive notation", () => {
    expect(intToRoman(58)).toBe("LVIII");
  });

  it("converts a value with multiple subtractive pairs", () => {
    expect(intToRoman(1994)).toBe("MCMXCIV");
  });
});
