import { describe, it, expect } from "vitest";
import { isValidBST } from "./validateBST";
import { arrayToTree } from "../binary-tree-general/treeNode";

describe("isValidBST", () => {
  it("accepts a valid BST", () => {
    expect(isValidBST(arrayToTree([2, 1, 3]))).toBe(true);
  });

  it("rejects a node that violates an ancestor's bound, not just its parent's", () => {
    expect(isValidBST(arrayToTree([5, 1, 4, null, null, 3, 6]))).toBe(false);
  });

  it("rejects duplicate values (must be strictly less/greater)", () => {
    expect(isValidBST(arrayToTree([2, 2, 2]))).toBe(false);
  });
});
