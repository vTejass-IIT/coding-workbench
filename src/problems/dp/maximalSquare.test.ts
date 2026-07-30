import { describe, it, expect } from "vitest";
import { maximalSquare } from "./maximalSquare";

describe("maximalSquare", () => {
  it("finds the largest all-1s square in a mixed grid", () => {
    const matrix = [
      ["1", "0", "1", "0", "0"],
      ["1", "0", "1", "1", "1"],
      ["1", "1", "1", "1", "1"],
      ["1", "0", "0", "1", "0"],
    ];
    expect(maximalSquare(matrix)).toBe(4);
  });

  it("returns 0 when there are no 1s", () => {
    expect(maximalSquare([["0", "0"], ["0", "0"]])).toBe(0);
  });

  it("handles a single 1 cell", () => {
    expect(maximalSquare([["1"]])).toBe(1);
  });
});
