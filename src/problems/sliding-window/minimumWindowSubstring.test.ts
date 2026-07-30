import { describe, it, expect } from "vitest";
import { minWindow } from "./minimumWindowSubstring";

describe("minWindow", () => {
  it("finds the minimum covering window", () => {
    expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
  });

  it("returns empty string when t can't be covered", () => {
    expect(minWindow("a", "aa")).toBe("");
  });

  it("handles s and t being identical", () => {
    expect(minWindow("a", "a")).toBe("a");
  });
});
