import { describe, it, expect } from "vitest";
import { calcEquation } from "./evaluateDivision";

function closeArray(actual: number[], expected: number[]) {
  expect(actual.length).toBe(expected.length);
  actual.forEach((v, i) => expect(v).toBeCloseTo(expected[i], 5));
}

describe("calcEquation", () => {
  it("derives a value via a chain of equations", () => {
    const result = calcEquation([["a", "b"], ["b", "c"]], [2.0, 3.0], [["a", "c"], ["b", "a"]]);
    closeArray(result, [6.0, 0.5]);
  });

  it("returns -1 for a query involving an unknown variable", () => {
    const result = calcEquation([["a", "b"]], [2.0], [["a", "x"]]);
    closeArray(result, [-1.0]);
  });

  it("returns -1 for a query with no connecting path", () => {
    const result = calcEquation(
      [["a", "b"], ["c", "d"]],
      [1.0, 1.0],
      [["a", "c"]]
    );
    closeArray(result, [-1.0]);
  });
});
