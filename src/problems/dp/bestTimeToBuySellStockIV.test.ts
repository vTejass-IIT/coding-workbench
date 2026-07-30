import { describe, it, expect } from "vitest";
import { maxProfit } from "./bestTimeToBuySellStockIV";

describe("maxProfit (at most k transactions)", () => {
  it("finds the optimal profit for k = 2", () => {
    expect(maxProfit(2, [2, 4, 1])).toBe(2);
  });

  it("finds the optimal profit for a larger k allowing multiple swings", () => {
    expect(maxProfit(2, [3, 2, 6, 5, 0, 3])).toBe(7);
  });

  it("returns 0 when k = 0 (no transactions allowed)", () => {
    expect(maxProfit(0, [1, 5])).toBe(0);
  });
});
