import { describe, it, expect } from "vitest";
import { removeNthFromEnd } from "./removeNthFromEnd";
import { arrayToList, listToArray } from "./listNode";

describe("removeNthFromEnd", () => {
  it("removes an interior node counted from the end", () => {
    const result = removeNthFromEnd(arrayToList([1, 2, 3, 4, 5]), 2);
    expect(listToArray(result)).toEqual([1, 2, 3, 5]);
  });

  it("removes the head when n equals the list length", () => {
    const result = removeNthFromEnd(arrayToList([1, 2, 3]), 3);
    expect(listToArray(result)).toEqual([2, 3]);
  });

  it("handles a single-node list (result is empty)", () => {
    const result = removeNthFromEnd(arrayToList([1]), 1);
    expect(listToArray(result)).toEqual([]);
  });
});
