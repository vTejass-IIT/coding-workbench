import { describe, it, expect } from "vitest";
import { isAnagram } from "./validAnagram";

describe("isAnagram", () => {
  it("recognizes a valid anagram", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });

  it("rejects strings with different letter counts", () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });

  it("rejects strings of different lengths", () => {
    expect(isAnagram("a", "ab")).toBe(false);
  });
});
