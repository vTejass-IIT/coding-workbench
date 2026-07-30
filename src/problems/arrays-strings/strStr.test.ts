import { describe, it, expect } from "vitest";
import { strStr } from "./strStr";

describe("strStr", () => {
  it("finds the first occurrence of needle", () => {
    expect(strStr("sadbutsad", "sad")).toBe(0);
  });

  it("returns -1 when needle is not present", () => {
    expect(strStr("leetcode", "leeto")).toBe(-1);
  });

  it("handles an empty needle (matches at index 0)", () => {
    expect(strStr("abc", "")).toBe(0);
  });
});
