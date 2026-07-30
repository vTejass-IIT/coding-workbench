import { describe, it, expect } from "vitest";
import { BSTIterator } from "./binarySearchTreeIterator";
import { arrayToTree } from "./treeNode";

describe("BSTIterator", () => {
  it("yields values in ascending in-order sequence", () => {
    const it_ = new BSTIterator(arrayToTree([7, 3, 15, null, null, 9, 20]));
    const seen: number[] = [];
    while (it_.hasNext()) seen.push(it_.next());
    expect(seen).toEqual([3, 7, 9, 15, 20]);
  });

  it("reports hasNext() false once exhausted", () => {
    const it_ = new BSTIterator(arrayToTree([1]));
    expect(it_.hasNext()).toBe(true);
    expect(it_.next()).toBe(1);
    expect(it_.hasNext()).toBe(false);
  });

  it("handles an empty tree", () => {
    const it_ = new BSTIterator(null);
    expect(it_.hasNext()).toBe(false);
  });
});
