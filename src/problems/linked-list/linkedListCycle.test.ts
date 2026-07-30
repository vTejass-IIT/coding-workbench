import { describe, it, expect } from "vitest";
import { hasCycle } from "./linkedListCycle";
import { ListNode, arrayToList } from "./listNode";

describe("hasCycle", () => {
  it("detects a cycle back to an earlier node", () => {
    const head = arrayToList([3, 2, 0, -4])!;
    let tail: ListNode = head;
    while (tail.next) tail = tail.next;
    tail.next = head.next; // cycle into node with value 2
    expect(hasCycle(head)).toBe(true);
  });

  it("returns false for an acyclic list", () => {
    expect(hasCycle(arrayToList([1, 2, 3]))).toBe(false);
  });

  it("returns false for an empty list", () => {
    expect(hasCycle(null)).toBe(false);
  });
});
