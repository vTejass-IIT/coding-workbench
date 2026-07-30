import { describe, it, expect } from "vitest";
import { letterCombinations } from "./letterCombinationsPhoneNumber";

describe("letterCombinations", () => {
  it("generates all combinations for two digits", () => {
    const result = letterCombinations("23").slice().sort();
    expect(result).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].sort());
  });

  it("returns empty array for empty input", () => {
    expect(letterCombinations("")).toEqual([]);
  });

  it("handles a single digit", () => {
    expect(letterCombinations("2").slice().sort()).toEqual(["a", "b", "c"]);
  });
});
