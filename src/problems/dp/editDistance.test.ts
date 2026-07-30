import { describe, it, expect } from "vitest";
import { minDistance } from "./editDistance";

describe("minDistance", () => {
  it("computes the edit distance for a classic case", () => {
    expect(minDistance("horse", "ros")).toBe(3);
  });

  it("computes the edit distance when both share no structure", () => {
    expect(minDistance("intention", "execution")).toBe(5);
  });

  it("handles one string being empty (pure insertions)", () => {
    expect(minDistance("", "abc")).toBe(3);
  });
});
