import { describe, it, expect } from "vitest";
import { rightSideView } from "./rightSideView";
import { arrayToTree } from "../binary-tree-general/treeNode";

describe("rightSideView", () => {
  it("returns the rightmost node at each depth", () => {
    expect(rightSideView(arrayToTree([1, 2, 3, null, 5, null, 4]))).toEqual([1, 3, 4]);
  });

  it("handles a left-only path (still visible from the right)", () => {
    expect(rightSideView(arrayToTree([1, 2, null, 3]))).toEqual([1, 2, 3]);
  });

  it("handles an empty tree", () => {
    expect(rightSideView(null)).toEqual([]);
  });
});
