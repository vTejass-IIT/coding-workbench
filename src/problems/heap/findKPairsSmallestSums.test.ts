import { describe, it, expect } from "vitest";
import { kSmallestPairs } from "./findKPairsSmallestSums";

describe("kSmallestPairs", () => {
  it("finds the k pairs with smallest sums", () => {
    expect(kSmallestPairs([1, 7, 11], [2, 4, 6], 3)).toEqual([[1, 2], [1, 4], [1, 6]]);
  });

  it("returns fewer than k pairs when the cross product is smaller", () => {
    const result = kSmallestPairs([1, 2], [3], 5);
    expect(result.length).toBe(2);
  });

  it("handles k = 1", () => {
    expect(kSmallestPairs([1, 2], [3], 1)).toEqual([[1, 3]]);
  });
});
