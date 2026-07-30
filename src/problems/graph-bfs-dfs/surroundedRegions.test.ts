import { describe, it, expect } from "vitest";
import { solve } from "./surroundedRegions";

describe("solve", () => {
  it("flips fully enclosed regions but spares border-connected ones", () => {
    const board = [
      ["X", "X", "X", "X"],
      ["X", "O", "O", "X"],
      ["X", "X", "O", "X"],
      ["X", "O", "X", "X"],
    ];
    solve(board);
    expect(board).toEqual([
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
      ["X", "O", "X", "X"],
    ]);
  });

  it("leaves an all-border-connected board unchanged", () => {
    const board = [["O", "O"], ["O", "O"]];
    solve(board);
    expect(board).toEqual([["O", "O"], ["O", "O"]]);
  });

  it("handles a board with no 'O's", () => {
    const board = [["X", "X"], ["X", "X"]];
    solve(board);
    expect(board).toEqual([["X", "X"], ["X", "X"]]);
  });
});
