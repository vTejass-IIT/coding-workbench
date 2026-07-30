import { describe, it, expect } from "vitest";
import { searchRange } from "./findFirstLastPosition";

describe("searchRange", () => {
  it("finds the first and last index of a repeated target", () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
  });

  it("returns [-1,-1] when target is absent", () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
  });

  it("handles a target appearing exactly once", () => {
    expect(searchRange([1, 2, 3], 2)).toEqual([1, 1]);
  });
});
