import { describe, it, expect } from "vitest";
import { Trie } from "./implementTrie";

describe("Trie", () => {
  it("distinguishes exact matches from prefix-only matches", () => {
    const trie = new Trie();
    trie.insert("apple");
    expect(trie.search("apple")).toBe(true);
    expect(trie.search("app")).toBe(false);
    expect(trie.startsWith("app")).toBe(true);
  });

  it("finds a word once it's separately inserted", () => {
    const trie = new Trie();
    trie.insert("apple");
    trie.insert("app");
    expect(trie.search("app")).toBe(true);
  });

  it("returns false for a prefix that was never inserted", () => {
    const trie = new Trie();
    trie.insert("banana");
    expect(trie.startsWith("ban")).toBe(true);
    expect(trie.startsWith("bat")).toBe(false);
  });
});
