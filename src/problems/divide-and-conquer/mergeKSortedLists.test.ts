import { describe, it, expect } from "vitest";
import { mergeKLists } from "./mergeKSortedLists";
import { arrayToList, listToArray } from "../linked-list/listNode";

describe("mergeKLists", () => {
  it("merges several sorted lists into one", () => {
    const lists = [arrayToList([1, 4, 5]), arrayToList([1, 3, 4]), arrayToList([2, 6])];
    expect(listToArray(mergeKLists(lists))).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
  });

  it("handles an empty array of lists", () => {
    expect(mergeKLists([])).toBeNull();
  });

  it("handles a mix of empty and non-empty lists", () => {
    const lists = [null, arrayToList([1])];
    expect(listToArray(mergeKLists(lists))).toEqual([1]);
  });
});
