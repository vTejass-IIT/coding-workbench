import { describe, it, expect } from "vitest";
import { permute } from "./permutations";

function normalize(perms: number[][]): string[] {
  return perms.map((p) => p.join(",")).sort();
}

describe("permute", () => {
  it("generates all 6 permutations of a 3-element array", () => {
    const result = permute([1, 2, 3]);
    expect(normalize(result)).toEqual(
      normalize([[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]])
    );
  });

  it("handles a single element", () => {
    expect(permute([1])).toEqual([[1]]);
  });

  it("produces n! permutations for n = 4", () => {
    expect(permute([1, 2, 3, 4]).length).toBe(24);
  });
});
