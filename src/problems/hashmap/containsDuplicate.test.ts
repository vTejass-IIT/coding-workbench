import { describe, it, expect } from "vitest";
import { containsDuplicate } from "./containsDuplicate";

describe("containsDuplicate", () => {
  it("returns true when a value repeats", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  it("returns false when all values are unique", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  it("returns false for an empty array", () => {
    expect(containsDuplicate([])).toBe(false);
  });

  it("returns true for a single repeated pair", () => {
    expect(containsDuplicate([1, 1])).toBe(true);
  });
});
