import { describe, it, expect } from "vitest";
import { calculate } from "./basicCalculator";

describe("calculate", () => {
  it("evaluates nested parentheses", () => {
    expect(calculate("(1+(4+5+2)-3)+(6+8)")).toBe(23);
  });

  it("handles spaces and simple addition/subtraction", () => {
    expect(calculate(" 2-1 + 2 ")).toBe(3);
  });

  it("handles a leading unary minus before parentheses", () => {
    expect(calculate("-(2+3)")).toBe(-5);
  });
});
