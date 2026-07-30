import { describe, it, expect } from "vitest";
import { gameOfLife } from "./gameOfLife";

describe("gameOfLife", () => {
  it("computes the next generation", () => {
    const board = [
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ];
    gameOfLife(board);
    expect(board).toEqual([
      [0, 0, 0],
      [1, 0, 1],
      [0, 1, 1],
      [0, 1, 0],
    ]);
  });

  it("keeps a stable 2x2 block unchanged", () => {
    const board = [
      [1, 1],
      [1, 1],
    ];
    gameOfLife(board);
    expect(board).toEqual([
      [1, 1],
      [1, 1],
    ]);
  });

  it("kills an isolated live cell (under-population)", () => {
    const board = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    gameOfLife(board);
    expect(board).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });
});
