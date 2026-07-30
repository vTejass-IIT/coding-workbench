import { describe, it, expect } from "vitest";
import { isSymmetric } from "./symmetricTree";
import { arrayToTree } from "./treeNode";

describe("isSymmetric", () => {
  it("recognizes a symmetric tree", () => {
    expect(isSymmetric(arrayToTree([1, 2, 2, 3, 4, 4, 3]))).toBe(true);
  });

  it("rejects an asymmetric tree", () => {
    expect(isSymmetric(arrayToTree([1, 2, 2, null, 3, null, 3]))).toBe(false);
  });

  it("treats a single node as symmetric", () => {
    expect(isSymmetric(arrayToTree([1]))).toBe(true);
  });
});
