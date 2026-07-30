import { describe, it, expect } from "vitest";
import { convert } from "./zigzagConversion";

describe("convert", () => {
  it("converts across 3 rows", () => {
    expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
  });

  it("converts across 4 rows", () => {
    expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
  });

  it("returns the string unchanged when numRows = 1", () => {
    expect(convert("ABC", 1)).toBe("ABC");
  });
});
