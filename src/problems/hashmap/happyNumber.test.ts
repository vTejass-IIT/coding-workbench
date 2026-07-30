import { describe, it, expect } from "vitest";
import { isHappy } from "./happyNumber";

describe("isHappy", () => {
  it("recognizes a happy number", () => {
    expect(isHappy(19)).toBe(true);
  });

  it("recognizes a non-happy number (falls into a cycle)", () => {
    expect(isHappy(2)).toBe(false);
  });

  it("treats 1 as happy", () => {
    expect(isHappy(1)).toBe(true);
  });
});
