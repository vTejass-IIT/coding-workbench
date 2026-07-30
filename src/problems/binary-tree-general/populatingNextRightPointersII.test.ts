import { describe, it, expect } from "vitest";
import { connect, Node } from "./populatingNextRightPointersII";

function levelNextVals(root: Node | null): (number | null)[][] {
  const levels: (number | null)[][] = [];
  let levelStart = root;
  while (levelStart) {
    const vals: (number | null)[] = [];
    let node: Node | null = levelStart;
    let nextLevelStart: Node | null = null;
    while (node) {
      vals.push(node.next ? node.next.val : null);
      if (!nextLevelStart) nextLevelStart = node.left ?? node.right;
      node = node.next;
    }
    levels.push(vals);
    levelStart = nextLevelStart;
  }
  return levels;
}

describe("connect", () => {
  it("links same-level nodes across an irregular (non-perfect) tree", () => {
    const root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.right.right = new Node(5);
    const result = connect(root);
    expect(levelNextVals(result)).toEqual([[null], [3, null], [5, null]]);
  });

  it("handles a single node (next stays null)", () => {
    const root = new Node(1);
    const result = connect(root);
    expect(result!.next).toBeNull();
  });

  it("handles an empty tree", () => {
    expect(connect(null)).toBeNull();
  });
});
