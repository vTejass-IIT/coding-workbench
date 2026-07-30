import { describe, it, expect } from "vitest";
import { flatten } from "./flattenBinaryTreeToLinkedList";
import { arrayToTree } from "./treeNode";

function toPreorderChain(root: ReturnType<typeof arrayToTree>): number[] {
  const out: number[] = [];
  let node = root;
  while (node) {
    expect(node.left).toBeNull();
    out.push(node.val);
    node = node.right;
  }
  return out;
}

describe("flatten", () => {
  it("flattens into a right-only chain in preorder", () => {
    const root = arrayToTree([1, 2, 5, 3, 4, null, 6]);
    flatten(root);
    expect(toPreorderChain(root)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("handles an empty tree", () => {
    const root = arrayToTree([]);
    flatten(root);
    expect(root).toBeNull();
  });

  it("handles a single node", () => {
    const root = arrayToTree([1]);
    flatten(root);
    expect(toPreorderChain(root)).toEqual([1]);
  });
});
