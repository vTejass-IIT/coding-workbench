import { describe, it, expect } from "vitest";
import { construct, QuadNode } from "./constructQuadTree";

function serialize(node: QuadNode): unknown {
  if (node.isLeaf) return { val: node.val, isLeaf: true };
  return {
    isLeaf: false,
    topLeft: serialize(node.topLeft!),
    topRight: serialize(node.topRight!),
    bottomLeft: serialize(node.bottomLeft!),
    bottomRight: serialize(node.bottomRight!),
  };
}

describe("construct", () => {
  it("returns a single leaf for a uniform grid", () => {
    const root = construct([
      [1, 1],
      [1, 1],
    ]);
    expect(serialize(root)).toEqual({ val: true, isLeaf: true });
  });

  it("splits a non-uniform grid into four leaf quadrants", () => {
    const root = construct([
      [1, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 1, 1],
      [0, 0, 1, 1],
    ]);
    expect(serialize(root)).toEqual({
      isLeaf: false,
      topLeft: { val: true, isLeaf: true },
      topRight: { val: false, isLeaf: true },
      bottomLeft: { val: false, isLeaf: true },
      bottomRight: { val: true, isLeaf: true },
    });
  });

  it("handles a single-cell grid", () => {
    expect(serialize(construct([[0]]))).toEqual({ val: false, isLeaf: true });
  });
});
