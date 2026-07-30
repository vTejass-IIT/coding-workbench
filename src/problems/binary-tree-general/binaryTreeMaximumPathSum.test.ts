import { describe, it, expect } from "vitest";
import { maxPathSum } from "./binaryTreeMaximumPathSum";
import { arrayToTree } from "./treeNode";

describe("maxPathSum", () => {
  it("finds the max path sum not passing through the root", () => {
    expect(maxPathSum(arrayToTree([-10, 9, 20, null, null, 15, 7]))).toBe(42);
  });

  it("handles a simple two-node tree", () => {
    expect(maxPathSum(arrayToTree([1, 2, 3]))).toBe(6);
  });

  it("handles all-negative values (best path is the least negative single node)", () => {
    expect(maxPathSum(arrayToTree([-3]))).toBe(-3);
  });
});
