import { describe, it, expect } from "vitest";
import { merge } from "./mergeIntervals";

describe("merge", () => {
  it("merges overlapping intervals", () => {
    expect(merge([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([[1, 6], [8, 10], [15, 18]]);
  });

  it("merges intervals that touch at the boundary", () => {
    expect(merge([[1, 4], [4, 5]])).toEqual([[1, 5]]);
  });

  it("leaves non-overlapping intervals unchanged (still sorted)", () => {
    expect(merge([[1, 2], [3, 4]])).toEqual([[1, 2], [3, 4]]);
  });
});
