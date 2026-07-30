import { describe, it, expect } from "vitest";
import { maxProfit } from "./bestTimeToBuySellStockIII";

describe("maxProfit (at most 2 transactions)", () => {
  it("finds the optimal two-transaction profit", () => {
    expect(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])).toBe(6);
  });

  it("uses only one transaction when a second wouldn't help", () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  });

  it("returns 0 for a strictly decreasing price series", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
});
