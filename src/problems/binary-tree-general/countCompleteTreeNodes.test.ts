import { describe, it, expect } from "vitest";
import { countNodes } from "./countCompleteTreeNodes";
import { arrayToTree } from "./treeNode";

describe("countNodes", () => {
  it("counts nodes in a complete but not-full tree", () => {
    expect(countNodes(arrayToTree([1, 2, 3, 4, 5, 6]))).toBe(6);
  });

  it("returns 0 for an empty tree", () => {
    expect(countNodes(null)).toBe(0);
  });

  it("counts a perfectly full tree", () => {
    expect(countNodes(arrayToTree([1, 2, 3, 4, 5, 6, 7]))).toBe(7);
  });
});
