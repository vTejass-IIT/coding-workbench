import { describe, it, expect } from "vitest";
import { findMaximizedCapital } from "./ipo";

describe("findMaximizedCapital", () => {
  it("greedily picks the most profitable affordable projects", () => {
    expect(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1])).toBe(4);
  });

  it("stops early when no project is affordable", () => {
    expect(findMaximizedCapital(3, 0, [1, 2, 3], [1, 1, 2])).toBe(0);
  });

  it("caps at k projects even if more are affordable", () => {
    expect(findMaximizedCapital(1, 0, [1, 2, 3], [0, 0, 0])).toBe(3);
  });
});
