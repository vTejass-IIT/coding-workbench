import { describe, it, expect } from "vitest";
import { isValid } from "./validParentheses";

describe("isValid", () => {
  it("accepts properly nested brackets", () => {
    expect(isValid("([{}])")).toBe(true);
  });

  it("rejects improperly ordered brackets", () => {
    expect(isValid("([)]")).toBe(false);
  });

  it("rejects unmatched opening bracket", () => {
    expect(isValid("(((")).toBe(false);
  });

  it("accepts empty string", () => {
    expect(isValid("")).toBe(true);
  });
});
