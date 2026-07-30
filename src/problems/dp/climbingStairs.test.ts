import { describe, it, expect } from "vitest";
import { climbStairs } from "./climbingStairs";

describe("climbStairs", () => {
  it("counts ways for n=2", () => {
    expect(climbStairs(2)).toBe(2);
  });

  it("counts ways for n=5", () => {
    expect(climbStairs(5)).toBe(8);
  });

  it("counts ways for n=1", () => {
    expect(climbStairs(1)).toBe(1);
  });
});
