import { describe, it, expect } from "vitest";
import { canConstruct } from "./ransomNote";

describe("canConstruct", () => {
  it("returns false when magazine lacks a needed letter", () => {
    expect(canConstruct("a", "b")).toBe(false);
  });

  it("returns false when magazine has too few copies", () => {
    expect(canConstruct("aa", "ab")).toBe(false);
  });

  it("returns true when magazine has enough of every letter", () => {
    expect(canConstruct("aa", "aab")).toBe(true);
  });
});
