import { describe, it, expect } from "vitest";
import { averageOfLevels } from "./averageOfLevels";
import { arrayToTree } from "../binary-tree-general/treeNode";

describe("averageOfLevels", () => {
  it("averages each level", () => {
    expect(averageOfLevels(arrayToTree([3, 9, 20, null, null, 15, 7]))).toEqual([3, 14.5, 11]);
  });

  it("handles a single node", () => {
    expect(averageOfLevels(arrayToTree([5]))).toEqual([5]);
  });

  it("handles negative values", () => {
    expect(averageOfLevels(arrayToTree([-1, -2, -3]))).toEqual([-1, -2.5]);
  });
});
