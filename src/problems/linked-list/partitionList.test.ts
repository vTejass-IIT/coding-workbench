import { describe, it, expect } from "vitest";
import { partition } from "./partitionList";
import { arrayToList, listToArray } from "./listNode";

describe("partition", () => {
  it("groups nodes below x before nodes >= x, preserving order", () => {
    const result = partition(arrayToList([1, 4, 3, 2, 5, 2]), 3);
    expect(listToArray(result)).toEqual([1, 2, 2, 4, 3, 5]);
  });

  it("handles all nodes already below x", () => {
    const result = partition(arrayToList([1, 2]), 5);
    expect(listToArray(result)).toEqual([1, 2]);
  });

  it("handles an empty list", () => {
    expect(partition(null, 3)).toBeNull();
  });
});
