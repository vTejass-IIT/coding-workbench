import { describe, it, expect } from "vitest";
import { cloneGraph, GraphNode } from "./cloneGraph";

function buildSquare(): GraphNode {
  const n1 = new GraphNode(1);
  const n2 = new GraphNode(2);
  const n3 = new GraphNode(3);
  const n4 = new GraphNode(4);
  n1.neighbors = [n2, n4];
  n2.neighbors = [n1, n3];
  n3.neighbors = [n2, n4];
  n4.neighbors = [n1, n3];
  return n1;
}

function flatten(start: GraphNode): Map<number, number[]> {
  const seen = new Map<number, number[]>();
  const stack = [start];
  while (stack.length) {
    const node = stack.pop()!;
    if (seen.has(node.val)) continue;
    seen.set(node.val, node.neighbors.map((n) => n.val).sort());
    stack.push(...node.neighbors);
  }
  return seen;
}

describe("cloneGraph", () => {
  it("produces an independent deep copy with identical structure", () => {
    const original = buildSquare();
    const clone = cloneGraph(original)!;
    expect(clone).not.toBe(original);
    expect(flatten(clone)).toEqual(flatten(original));
  });

  it("handles a single node with no neighbors", () => {
    const original = new GraphNode(1);
    const clone = cloneGraph(original)!;
    expect(clone.val).toBe(1);
    expect(clone.neighbors).toEqual([]);
    expect(clone).not.toBe(original);
  });

  it("handles an empty graph", () => {
    expect(cloneGraph(null)).toBeNull();
  });
});
