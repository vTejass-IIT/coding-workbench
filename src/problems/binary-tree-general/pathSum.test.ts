import { describe, it, expect } from "vitest";
import { hasPathSum } from "./pathSum";
import { arrayToTree } from "./treeNode";

describe("hasPathSum", () => {
  it("finds a qualifying root-to-leaf path", () => {
    const root = arrayToTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);
    expect(hasPathSum(root, 22)).toBe(true);
  });

  it("returns false when no path matches", () => {
    expect(hasPathSum(arrayToTree([1, 2, 3]), 5)).toBe(false);
  });

  it("returns false for an empty tree regardless of target", () => {
    expect(hasPathSum(null, 0)).toBe(false);
  });
});
