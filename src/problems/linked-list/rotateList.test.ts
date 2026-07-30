import { describe, it, expect } from "vitest";
import { rotateRight } from "./rotateList";
import { arrayToList, listToArray } from "./listNode";

describe("rotateRight", () => {
  it("rotates right by k places", () => {
    const result = rotateRight(arrayToList([1, 2, 3, 4, 5]), 2);
    expect(listToArray(result)).toEqual([4, 5, 1, 2, 3]);
  });

  it("handles k larger than the list length (wraps around)", () => {
    const result = rotateRight(arrayToList([0, 1, 2]), 4); // equivalent to k = 1
    expect(listToArray(result)).toEqual([2, 0, 1]);
  });

  it("handles an empty list", () => {
    expect(rotateRight(null, 5)).toBeNull();
  });
});
