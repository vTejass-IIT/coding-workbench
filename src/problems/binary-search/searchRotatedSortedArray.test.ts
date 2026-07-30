import { describe, it, expect } from "vitest";
import { search } from "./searchRotatedSortedArray";

describe("search", () => {
  it("finds target in rotated array", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });

  it("returns -1 when target is absent", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });

  it("handles non-rotated array", () => {
    expect(search([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  it("handles single element", () => {
    expect(search([1], 1)).toBe(0);
    expect(search([1], 0)).toBe(-1);
  });
});
