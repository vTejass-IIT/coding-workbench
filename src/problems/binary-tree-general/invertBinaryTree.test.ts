import { describe, it, expect } from "vitest";
import { invertTree } from "./invertBinaryTree";
import { arrayToTree, treeToArray } from "./treeNode";

describe("invertTree", () => {
  it("mirrors a balanced tree", () => {
    const result = invertTree(arrayToTree([4, 2, 7, 1, 3, 6, 9]));
    expect(treeToArray(result)).toEqual([4, 7, 2, 9, 6, 3, 1]);
  });

  it("handles a single node", () => {
    const result = invertTree(arrayToTree([1]));
    expect(treeToArray(result)).toEqual([1]);
  });

  it("handles an empty tree", () => {
    expect(invertTree(null)).toBeNull();
  });
});
