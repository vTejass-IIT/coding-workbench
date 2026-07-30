import { describe, it, expect } from "vitest";
import { maxProfit } from "./bestTimeToBuyAndSellStock";

describe("maxProfit", () => {
  it("finds the best buy/sell pair", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  it("returns 0 when prices only decrease", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  it("handles a single price (no transaction possible)", () => {
    expect(maxProfit([5])).toBe(0);
  });
});
