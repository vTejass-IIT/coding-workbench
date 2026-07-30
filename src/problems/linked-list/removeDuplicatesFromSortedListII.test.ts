import { describe, it, expect } from "vitest";
import { deleteDuplicates } from "./removeDuplicatesFromSortedListII";
import { arrayToList, listToArray } from "./listNode";

describe("deleteDuplicates", () => {
  it("removes every node whose value has a duplicate", () => {
    const result = deleteDuplicates(arrayToList([1, 2, 3, 3, 4, 4, 5]));
    expect(listToArray(result)).toEqual([1, 2, 5]);
  });

  it("removes duplicates that start at the head", () => {
    const result = deleteDuplicates(arrayToList([1, 1, 1, 2, 3]));
    expect(listToArray(result)).toEqual([2, 3]);
  });

  it("leaves a list with no duplicates unchanged", () => {
    const result = deleteDuplicates(arrayToList([1, 2, 3]));
    expect(listToArray(result)).toEqual([1, 2, 3]);
  });
});
