import { describe, it, expect } from "vitest";
import { rob } from "./houseRobber";

describe("rob", () => {
  it("avoids robbing adjacent houses", () => {
    expect(rob([1, 2, 3, 1])).toBe(4);
  });

  it("finds the optimal non-adjacent selection for a longer street", () => {
    expect(rob([2, 7, 9, 3, 1])).toBe(12);
  });

  it("handles a single house", () => {
    expect(rob([5])).toBe(5);
  });
});
