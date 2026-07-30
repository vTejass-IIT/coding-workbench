import { describe, it, expect } from "vitest";
import { hIndex } from "./hIndex";

describe("hIndex", () => {
  it("computes the h-index from unsorted citations", () => {
    expect(hIndex([3, 0, 6, 1, 5])).toBe(3);
  });

  it("handles all-zero citations", () => {
    expect(hIndex([0, 0, 0])).toBe(0);
  });

  it("handles every paper cited at least n times", () => {
    expect(hIndex([100, 100, 100])).toBe(3);
  });
});
