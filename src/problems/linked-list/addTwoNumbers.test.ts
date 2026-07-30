import { describe, it, expect } from "vitest";
import { addTwoNumbers } from "./addTwoNumbers";
import { arrayToList, listToArray } from "./listNode";

describe("addTwoNumbers", () => {
  it("adds two multi-digit numbers", () => {
    const result = addTwoNumbers(arrayToList([2, 4, 3]), arrayToList([5, 6, 4]));
    expect(listToArray(result)).toEqual([7, 0, 8]);
  });

  it("handles carrying past the longer list's length", () => {
    const result = addTwoNumbers(arrayToList([9, 9, 9]), arrayToList([1]));
    expect(listToArray(result)).toEqual([0, 0, 0, 1]);
  });

  it("adds two zeros", () => {
    const result = addTwoNumbers(arrayToList([0]), arrayToList([0]));
    expect(listToArray(result)).toEqual([0]);
  });
});
