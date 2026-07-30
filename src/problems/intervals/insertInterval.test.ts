import { describe, it, expect } from "vitest";
import { insert } from "./insertInterval";

describe("insert", () => {
  it("merges the new interval with overlapping ones", () => {
    expect(insert([[1, 3], [6, 9]], [2, 5])).toEqual([[1, 5], [6, 9]]);
  });

  it("merges across several existing intervals", () => {
    expect(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])).toEqual([
      [1, 2],
      [3, 10],
      [12, 16],
    ]);
  });

  it("inserts without overlap into an empty list", () => {
    expect(insert([], [5, 7])).toEqual([[5, 7]]);
  });
});
