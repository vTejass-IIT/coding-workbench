import { describe, it, expect } from "vitest";
import { searchInsert } from "./searchInsertPosition";

describe("searchInsert", () => {
  it("finds the index of an existing target", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });

  it("finds the insertion index for a missing target in the middle", () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  });

  it("finds the insertion index past the end", () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });
});
