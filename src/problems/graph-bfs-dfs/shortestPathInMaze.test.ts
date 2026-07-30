import { describe, it, expect } from "vitest";
import { shortestPathInMaze } from "./shortestPathInMaze";

describe("shortestPathInMaze", () => {
  it("finds the shortest path around a wall", () => {
    expect(
      shortestPathInMaze([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ])
    ).toBe(5);
  });

  it("finds the shortest path in a fully open grid", () => {
    expect(
      shortestPathInMaze([
        [0, 0],
        [0, 0],
      ])
    ).toBe(3);
  });

  it("returns -1 when no path exists", () => {
    expect(
      shortestPathInMaze([
        [0, 1],
        [1, 0],
      ])
    ).toBe(-1);
  });

  it("returns -1 when the start cell is a wall", () => {
    expect(
      shortestPathInMaze([
        [1, 0],
        [0, 0],
      ])
    ).toBe(-1);
  });

  it("handles a single-cell grid", () => {
    expect(shortestPathInMaze([[0]])).toBe(1);
  });
});
