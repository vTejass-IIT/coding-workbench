import { describe, it, expect } from "vitest";
import { productExceptSelf } from "./productOfArrayExceptSelf";

describe("productExceptSelf", () => {
  it("computes products except self", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  it("handles a single zero in the array", () => {
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
  });

  it("handles two zeros (everything becomes zero)", () => {
    expect(productExceptSelf([0, 4, 0])).toEqual([0, 0, 0]);
  });
});
