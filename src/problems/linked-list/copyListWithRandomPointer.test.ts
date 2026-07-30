import { describe, it, expect } from "vitest";
import { copyRandomList, RandomNode } from "./copyListWithRandomPointer";

// Builds a list from [val, randomIndex | null][] pairs, mirroring the LC input format.
function build(pairs: [number, number | null][]): RandomNode | null {
  const nodes = pairs.map(([val]) => new RandomNode(val));
  pairs.forEach(([, randomIdx], i) => {
    nodes[i].next = nodes[i + 1] ?? null;
    nodes[i].random = randomIdx === null ? null : nodes[randomIdx];
  });
  return nodes[0] ?? null;
}

function flatten(head: RandomNode | null): { val: number; randomVal: number | null }[] {
  const out: { val: number; randomVal: number | null }[] = [];
  let cur = head;
  while (cur) {
    out.push({ val: cur.val, randomVal: cur.random ? cur.random.val : null });
    cur = cur.next;
  }
  return out;
}

describe("copyRandomList", () => {
  it("deep-copies nodes and preserves random pointer targets", () => {
    const original = build([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]);
    const copy = copyRandomList(original);
    expect(flatten(copy)).toEqual(flatten(original));
    expect(copy).not.toBe(original); // must be an independent node, not the same reference
  });

  it("handles a single node whose random points to itself", () => {
    const original = build([[1, 0]]);
    const copy = copyRandomList(original);
    expect(copy!.random).toBe(copy);
  });

  it("handles an empty list", () => {
    expect(copyRandomList(null)).toBeNull();
  });
});
