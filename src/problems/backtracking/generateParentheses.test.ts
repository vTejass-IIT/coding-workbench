import { describe, it, expect } from "vitest";
import { generateParenthesis } from "./generateParentheses";

describe("generateParenthesis", () => {
  it("generates all 5 well-formed combinations for n = 3", () => {
    const result = generateParenthesis(3).slice().sort();
    expect(result).toEqual(
      ["((()))", "(()())", "(())()", "()(())", "()()()"].sort()
    );
  });

  it("handles n = 1", () => {
    expect(generateParenthesis(1)).toEqual(["()"]);
  });

  it("produces the Catalan-number count for n = 4 (14 combinations)", () => {
    expect(generateParenthesis(4).length).toBe(14);
  });
});
