import { describe, it, expect } from "vitest";
import { evalRPN } from "./evaluateReversePolishNotation";

describe("evalRPN", () => {
  it("evaluates a simple expression", () => {
    expect(evalRPN(["2", "1", "+", "3", "*"])).toBe(9);
  });

  it("evaluates a longer expression", () => {
    expect(evalRPN(["4", "13", "5", "/", "+"])).toBe(6);
  });

  it("truncates integer division toward zero", () => {
    expect(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])).toBe(22);
  });
});
