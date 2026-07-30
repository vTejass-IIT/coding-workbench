import { describe, it, expect } from "vitest";
import { getMinimumDifference } from "./minimumAbsoluteDifference";
import { arrayToTree } from "../binary-tree-general/treeNode";

describe("getMinimumDifference", () => {
  it("finds the minimum gap between adjacent in-order values", () => {
    expect(getMinimumDifference(arrayToTree([4, 2, 6, 1, 3]))).toBe(1);
  });

  it("handles a larger BST", () => {
    expect(getMinimumDifference(arrayToTree([1, 0, 48, null, null, 12, 49]))).toBe(1);
  });

  it("handles the minimal two-node tree", () => {
    expect(getMinimumDifference(arrayToTree([1, null, 3]))).toBe(2);
  });
});
