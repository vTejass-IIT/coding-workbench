import { describe, it, expect } from "vitest";
import { containsNearbyDuplicate } from "./containsDuplicateII";

describe("containsNearbyDuplicate", () => {
  it("finds a duplicate within the window", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true);
  });

  it("returns false when the duplicate is outside the window", () => {
    expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBe(true);
    expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBe(false);
  });

  it("returns false when there are no duplicates at all", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 4], 3)).toBe(false);
  });
});
