import { describe, it, expect } from "vitest";
import { reverseKGroup } from "./reverseNodesInKGroup";
import { arrayToList, listToArray } from "./listNode";

describe("reverseKGroup", () => {
  it("reverses complete groups of k and leaves the remainder as-is", () => {
    const result = reverseKGroup(arrayToList([1, 2, 3, 4, 5]), 2);
    expect(listToArray(result)).toEqual([2, 1, 4, 3, 5]);
  });

  it("reverses the whole list when k equals its length", () => {
    const result = reverseKGroup(arrayToList([1, 2, 3, 4]), 4);
    expect(listToArray(result)).toEqual([4, 3, 2, 1]);
  });

  it("is a no-op when k = 1", () => {
    const result = reverseKGroup(arrayToList([1, 2, 3]), 1);
    expect(listToArray(result)).toEqual([1, 2, 3]);
  });
});
