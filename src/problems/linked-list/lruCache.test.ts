import { describe, it, expect } from "vitest";
import { LRUCache } from "./lruCache";

describe("LRUCache", () => {
  it("evicts the least-recently-used key when over capacity", () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1); // 1 is now most-recently-used
    cache.put(3, 3); // evicts 2 (least-recently-used)
    expect(cache.get(2)).toBe(-1);
    cache.put(4, 4); // evicts 1
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(3)).toBe(3);
    expect(cache.get(4)).toBe(4);
  });

  it("updates an existing key's value and recency", () => {
    const cache = new LRUCache(1);
    cache.put(1, 10);
    cache.put(1, 20);
    expect(cache.get(1)).toBe(20);
  });

  it("returns -1 for a missing key", () => {
    const cache = new LRUCache(2);
    expect(cache.get(99)).toBe(-1);
  });
});
