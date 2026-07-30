import { describe, it, expect } from "vitest";
import { uniquePathsWithObstacles } from "./uniquePathsII";

describe("uniquePathsWithObstacles", () => {
  it("counts paths around a single obstacle", () => {
    expect(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]])).toBe(2);
  });

  it("returns 0 when the start or end is blocked", () => {
    expect(uniquePathsWithObstacles([[1, 0], [0, 0]])).toBe(0);
  });

  it("counts the single path when there are no obstacles", () => {
    expect(uniquePathsWithObstacles([[0, 0]])).toBe(1);
  });
});
