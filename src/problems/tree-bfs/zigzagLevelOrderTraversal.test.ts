import { describe, it, expect } from "vitest";
import { zigzagLevelOrder } from "./zigzagLevelOrderTraversal";
import { arrayToTree } from "../binary-tree-general/treeNode";

describe("zigzagLevelOrder", () => {
  it("alternates direction each level", () => {
    expect(zigzagLevelOrder(arrayToTree([3, 9, 20, null, null, 15, 7]))).toEqual([
      [3],
      [20, 9],
      [15, 7],
    ]);
  });

  it("handles a single node", () => {
    expect(zigzagLevelOrder(arrayToTree([1]))).toEqual([[1]]);
  });

  it("handles an empty tree", () => {
    expect(zigzagLevelOrder(null)).toEqual([]);
  });
});
