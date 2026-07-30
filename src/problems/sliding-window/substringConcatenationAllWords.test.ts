import { describe, it, expect } from "vitest";
import { findSubstring } from "./substringConcatenationAllWords";

describe("findSubstring", () => {
  it("finds all start indices of a full concatenation", () => {
    expect(findSubstring("barfoothefoobarman", ["foo", "bar"]).sort()).toEqual([0, 9]);
  });

  it("returns empty when words can't be assembled", () => {
    expect(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])).toEqual([]);
  });

  it("handles repeated words needing exact multiplicity", () => {
    expect(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]).sort()).toEqual([6]);
  });
});
