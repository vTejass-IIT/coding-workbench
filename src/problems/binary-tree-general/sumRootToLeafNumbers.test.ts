import { describe, it, expect } from "vitest";
import { sumNumbers } from "./sumRootToLeafNumbers";
import { arrayToTree } from "./treeNode";

describe("sumNumbers", () => {
  it("sums all root-to-leaf numbers", () => {
    expect(sumNumbers(arrayToTree([1, 2, 3]))).toBe(25);
  });

  it("handles a deeper tree", () => {
    expect(sumNumbers(arrayToTree([4, 9, 0, 5, 1]))).toBe(1026); // 495 + 491 + 40
  });

  it("handles a single node", () => {
    expect(sumNumbers(arrayToTree([5]))).toBe(5);
  });
});
