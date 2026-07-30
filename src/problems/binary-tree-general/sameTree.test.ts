import { describe, it, expect } from "vitest";
import { isSameTree } from "./sameTree";
import { arrayToTree } from "./treeNode";

describe("isSameTree", () => {
  it("recognizes identical trees", () => {
    expect(isSameTree(arrayToTree([1, 2, 3]), arrayToTree([1, 2, 3]))).toBe(true);
  });

  it("rejects trees with different structure", () => {
    expect(isSameTree(arrayToTree([1, 2]), arrayToTree([1, null, 2]))).toBe(false);
  });

  it("rejects trees with the same structure but different values", () => {
    expect(isSameTree(arrayToTree([1, 2, 1]), arrayToTree([1, 1, 2]))).toBe(false);
  });
});
