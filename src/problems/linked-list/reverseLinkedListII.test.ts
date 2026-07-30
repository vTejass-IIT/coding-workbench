import { describe, it, expect } from "vitest";
import { reverseBetween } from "./reverseLinkedListII";
import { arrayToList, listToArray } from "./listNode";

describe("reverseBetween", () => {
  it("reverses an interior sublist", () => {
    const result = reverseBetween(arrayToList([1, 2, 3, 4, 5]), 2, 4);
    expect(listToArray(result)).toEqual([1, 4, 3, 2, 5]);
  });

  it("reverses from the head", () => {
    const result = reverseBetween(arrayToList([1, 2, 3]), 1, 3);
    expect(listToArray(result)).toEqual([3, 2, 1]);
  });

  it("is a no-op when left equals right", () => {
    const result = reverseBetween(arrayToList([1, 2, 3]), 2, 2);
    expect(listToArray(result)).toEqual([1, 2, 3]);
  });
});
