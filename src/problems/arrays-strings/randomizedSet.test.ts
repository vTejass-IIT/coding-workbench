import { describe, it, expect } from "vitest";
import { RandomizedSet } from "./randomizedSet";

describe("RandomizedSet", () => {
  it("inserts, removes, and reports membership correctly", () => {
    const set = new RandomizedSet();
    expect(set.insert(1)).toBe(true);
    expect(set.insert(1)).toBe(false); // already present
    expect(set.remove(2)).toBe(false); // not present
    expect(set.insert(2)).toBe(true);
    expect(set.remove(1)).toBe(true);
    expect(set.insert(2)).toBe(false); // already present
  });

  it("getRandom only ever returns elements currently in the set", () => {
    const set = new RandomizedSet();
    set.insert(10);
    set.insert(20);
    set.insert(30);
    for (let i = 0; i < 20; i++) {
      expect([10, 20, 30]).toContain(set.getRandom());
    }
  });
});
