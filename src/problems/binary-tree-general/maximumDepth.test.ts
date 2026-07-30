import { describe, it, expect } from "vitest";
import { maxDepth } from "./maximumDepth";
import { arrayToTree } from "./treeNode";

describe("maxDepth", () => {
  it("finds the depth of an unbalanced tree", () => {
    expect(maxDepth(arrayToTree([3, 9, 20, null, null, 15, 7]))).toBe(3);
  });

  it("returns 0 for an empty tree", () => {
    expect(maxDepth(null)).toBe(0);
  });

  it("returns 1 for a single node", () => {
    expect(maxDepth(arrayToTree([1]))).toBe(1);
  });
});
