import { describe, it, expect } from "vitest";
import { coinChange } from "./coinChange";

describe("coinChange", () => {
  it("finds the minimum coins for a reachable amount", () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3);
  });

  it("returns -1 when the amount is unreachable", () => {
    expect(coinChange([2], 3)).toBe(-1);
  });

  it("returns 0 for amount 0", () => {
    expect(coinChange([1], 0)).toBe(0);
  });
});
