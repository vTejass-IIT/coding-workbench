import { describe, it, expect } from "vitest";
import { WordDictionary } from "./addSearchWords";

describe("WordDictionary", () => {
  it("matches exact words and wildcard queries", () => {
    const dict = new WordDictionary();
    dict.addWord("bad");
    dict.addWord("dad");
    dict.addWord("mad");
    expect(dict.search("pad")).toBe(false);
    expect(dict.search("bad")).toBe(true);
    expect(dict.search(".ad")).toBe(true);
    expect(dict.search("b..")).toBe(true);
  });

  it("returns false when no added word matches the wildcard pattern", () => {
    const dict = new WordDictionary();
    dict.addWord("bad");
    expect(dict.search("..d.")).toBe(false); // wrong length
  });

  it("returns false for an empty dictionary", () => {
    const dict = new WordDictionary();
    expect(dict.search("a")).toBe(false);
  });
});
