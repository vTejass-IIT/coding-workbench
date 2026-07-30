import { describe, it, expect } from "vitest";
import { minimumTotal } from "./triangle";

describe("minimumTotal", () => {
  it("finds the minimum path sum through the triangle", () => {
    expect(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])).toBe(11);
  });

  it("handles a single row", () => {
    expect(minimumTotal([[-10]])).toBe(-10);
  });

  it("handles negative values throughout", () => {
    expect(minimumTotal([[1], [2, 3], [-6, -5, 1]])).toBe(-3);
  });
});
