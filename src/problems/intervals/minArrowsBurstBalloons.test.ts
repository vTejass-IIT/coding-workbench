import { describe, it, expect } from "vitest";
import { findMinArrowShots } from "./minArrowsBurstBalloons";

describe("findMinArrowShots", () => {
  it("finds the minimum arrows for overlapping balloons", () => {
    expect(findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]])).toBe(2);
  });

  it("needs one arrow per balloon when none overlap", () => {
    expect(findMinArrowShots([[1, 2], [3, 4], [5, 6], [7, 8]])).toBe(4);
  });

  it("needs one arrow when all balloons overlap", () => {
    expect(findMinArrowShots([[1, 6], [2, 8], [7, 12]])).toBe(1);
  });
});
