import { describe, it, expect } from "vitest";
import { canCompleteCircuit } from "./gasStation";

describe("canCompleteCircuit", () => {
  it("finds the valid starting station", () => {
    expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toBe(3);
  });

  it("returns -1 when no circuit is possible", () => {
    expect(canCompleteCircuit([2, 3, 4], [3, 4, 3])).toBe(-1);
  });

  it("handles a single station that covers its own cost", () => {
    expect(canCompleteCircuit([5], [4])).toBe(0);
  });
});
