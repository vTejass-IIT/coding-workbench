import { describe, it, expect } from "vitest";
import { numIslands } from "./numIslands";

describe("numIslands", () => {
  it("counts separate islands", () => {
    const grid = [
      ["1", "1", "0"],
      ["1", "0", "0"],
      ["0", "0", "1"],
    ];
    expect(numIslands(grid)).toBe(2);
  });

  it("counts a single large island", () => {
    const grid = [
      ["1", "1", "1"],
      ["1", "1", "1"],
    ];
    expect(numIslands(grid)).toBe(1);
  });

  it("returns 0 for all water", () => {
    const grid = [
      ["0", "0"],
      ["0", "0"],
    ];
    expect(numIslands(grid)).toBe(0);
  });
});
