import { describe, it, expect } from "vitest";
import { canJump } from "./jumpGame";

describe("canJump", () => {
  it("returns true when the last index is reachable", () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true);
  });

  it("returns false when a zero blocks all further progress", () => {
    expect(canJump([3, 2, 1, 0, 4])).toBe(false);
  });

  it("handles a single-element array (already at the last index)", () => {
    expect(canJump([0])).toBe(true);
  });
});
