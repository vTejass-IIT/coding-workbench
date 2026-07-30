import { describe, it, expect } from "vitest";
import { isSubsequence } from "./isSubsequence";

describe("isSubsequence", () => {
  it("finds s as a subsequence of t", () => {
    expect(isSubsequence("abc", "ahbgdc")).toBe(true);
  });

  it("returns false when order doesn't match", () => {
    expect(isSubsequence("axc", "ahbgdc")).toBe(false);
  });

  it("treats an empty s as a subsequence of anything", () => {
    expect(isSubsequence("", "ahbgdc")).toBe(true);
  });
});
