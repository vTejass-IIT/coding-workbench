import { describe, it, expect } from "vitest";
import { isInterleave } from "./interleavingString";

describe("isInterleave", () => {
  it("recognizes a valid interleaving", () => {
    expect(isInterleave("aabcc", "dbbca", "aadbbcbcac")).toBe(true);
  });

  it("rejects a string with the same letters but wrong interleaving", () => {
    expect(isInterleave("aabcc", "dbbca", "aadbbbaccc")).toBe(false);
  });

  it("handles both sources empty", () => {
    expect(isInterleave("", "", "")).toBe(true);
  });
});
