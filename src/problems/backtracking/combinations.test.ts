import { describe, it, expect } from "vitest";
import { combine } from "./combinations";

function normalize(combos: number[][]): number[][] {
  return combos.map((c) => [...c].sort((a, b) => a - b)).sort((a, b) => a.join() < b.join() ? -1 : 1);
}

describe("combine", () => {
  it("generates all size-2 combinations from 1..4", () => {
    const result = combine(4, 2);
    expect(normalize(result)).toEqual(
      normalize([[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]])
    );
  });

  it("handles k = n (one combination containing everything)", () => {
    expect(normalize(combine(3, 3))).toEqual([[1, 2, 3]]);
  });

  it("handles k = 1 (each element alone)", () => {
    expect(normalize(combine(3, 1))).toEqual([[1], [2], [3]]);
  });
});
