import { describe, it, expect } from "vitest";
import { snakesAndLadders } from "./snakesAndLadders";

describe("snakesAndLadders", () => {
  it("finds the minimum rolls using a ladder shortcut", () => {
    const board = [
      [-1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1],
      [-1, 35, -1, -1, 13, -1],
      [-1, -1, -1, -1, -1, -1],
      [-1, 15, -1, -1, -1, -1],
    ];
    expect(snakesAndLadders(board)).toBe(4);
  });

  it("handles a 2x2 board reaching the end directly", () => {
    expect(snakesAndLadders([[-1, -1], [-1, -1]])).toBe(1);
  });

  it("returns -1 when the destination is unreachable", () => {
    // n=2, square 3 (start of second row, top-left) is a "snake" sending back to 1 forever
    expect(snakesAndLadders([[-1, 1], [-1, -1]])).toBe(-1);
  });
});
