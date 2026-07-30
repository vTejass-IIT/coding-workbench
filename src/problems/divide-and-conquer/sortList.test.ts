import { describe, it, expect } from "vitest";
import { sortList } from "./sortList";
import { arrayToList, listToArray } from "../linked-list/listNode";

describe("sortList", () => {
  it("sorts an unordered list", () => {
    expect(listToArray(sortList(arrayToList([4, 2, 1, 3])))).toEqual([1, 2, 3, 4]);
  });

  it("handles duplicate and negative values", () => {
    expect(listToArray(sortList(arrayToList([-1, 5, 3, 4, 0, -2])))).toEqual([-2, -1, 0, 3, 4, 5]);
  });

  it("handles an empty list", () => {
    expect(sortList(null)).toBeNull();
  });
});
