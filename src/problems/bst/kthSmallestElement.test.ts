import { describe, it, expect } from "vitest";
import { kthSmallest } from "./kthSmallestElement";
import { arrayToTree } from "../binary-tree-general/treeNode";

describe("kthSmallest", () => {
  it("finds the kth smallest for a small tree", () => {
    expect(kthSmallest(arrayToTree([3, 1, 4, null, 2]), 1)).toBe(1);
  });

  it("finds the kth smallest for a larger tree", () => {
    expect(kthSmallest(arrayToTree([5, 3, 6, 2, 4, null, null, 1]), 3)).toBe(3);
  });

  it("finds the last (largest) element when k equals node count", () => {
    expect(kthSmallest(arrayToTree([2, 1, 3]), 3)).toBe(3);
  });
});
