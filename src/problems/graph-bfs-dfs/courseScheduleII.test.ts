import { describe, it, expect } from "vitest";
import { findOrder } from "./courseScheduleII";

function isValidOrder(order: number[], numCourses: number, prerequisites: number[][]): boolean {
  if (order.length !== numCourses) return false;
  const position = new Map(order.map((course, i) => [course, i]));
  return prerequisites.every(([a, b]) => position.get(b)! < position.get(a)!);
}

describe("findOrder", () => {
  it("produces a valid topological order", () => {
    const order = findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]);
    expect(isValidOrder(order, 4, [[1, 0], [2, 0], [3, 1], [3, 2]])).toBe(true);
  });

  it("returns an empty array when a cycle makes it impossible", () => {
    expect(findOrder(2, [[1, 0], [0, 1]])).toEqual([]);
  });

  it("returns any order when there are no prerequisites", () => {
    const order = findOrder(3, []);
    expect(order.slice().sort()).toEqual([0, 1, 2]);
  });
});
