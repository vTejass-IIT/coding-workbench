import { describe, it, expect } from "vitest";
import { minPathSum } from "./minimumPathSum";

describe("minPathSum", () => {
  it("finds the minimum sum path through a grid", () => {
    expect(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])).toBe(7);
  });

  it("handles a single row (only rightward moves)", () => {
    expect(minPathSum([[1, 2, 3]])).toBe(6);
  });

  it("handles a single cell", () => {
    expect(minPathSum([[5]])).toBe(5);
  });
});
