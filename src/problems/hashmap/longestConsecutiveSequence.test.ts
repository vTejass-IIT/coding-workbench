import { describe, it, expect } from "vitest";
import { longestConsecutive } from "./longestConsecutiveSequence";

describe("longestConsecutive", () => {
  it("finds the longest run of consecutive integers", () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
  });

  it("handles duplicates without over-counting", () => {
    expect(longestConsecutive([1, 2, 0, 1])).toBe(3);
  });

  it("handles an empty array", () => {
    expect(longestConsecutive([])).toBe(0);
  });
});
