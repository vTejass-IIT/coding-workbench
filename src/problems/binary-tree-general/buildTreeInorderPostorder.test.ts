import { describe, it, expect } from "vitest";
import { buildTree } from "./buildTreeInorderPostorder";
import { treeToArray } from "./treeNode";

describe("buildTree (inorder + postorder)", () => {
  it("reconstructs a balanced tree", () => {
    const root = buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);
    expect(treeToArray(root)).toEqual([3, 9, 20, null, null, 15, 7]);
  });

  it("reconstructs a single node", () => {
    expect(treeToArray(buildTree([1], [1]))).toEqual([1]);
  });

  it("reconstructs a right-skewed tree", () => {
    expect(treeToArray(buildTree([1, 2, 3], [1, 2, 3]))).toEqual([3, 2, null, 1]);
  });
});
