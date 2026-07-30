import { describe, it, expect } from "vitest";
import { dailyTemperatures } from "./dailyTemperatures";

describe("dailyTemperatures", () => {
  it("finds days until a warmer temperature", () => {
    expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([
      1, 1, 4, 2, 1, 1, 0, 0,
    ]);
  });

  it("handles strictly decreasing temperatures", () => {
    expect(dailyTemperatures([5, 4, 3, 2, 1])).toEqual([0, 0, 0, 0, 0]);
  });

  it("handles strictly increasing temperatures", () => {
    expect(dailyTemperatures([1, 2, 3, 4, 5])).toEqual([1, 1, 1, 1, 0]);
  });
});
