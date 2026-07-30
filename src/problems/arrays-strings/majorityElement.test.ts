import { describe, it, expect } from "vitest";
import { majorityElement } from "./majorityElement";

describe("majorityElement", () => {
  it("finds the majority element", () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });

  it("handles a single element", () => {
    expect(majorityElement([7])).toBe(7);
  });

  it("handles a majority formed by exactly n/2 + 1 occurrences", () => {
    expect(majorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4])).toBe(4);
  });
});
