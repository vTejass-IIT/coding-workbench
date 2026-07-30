import { describe, it, expect } from "vitest";
import { canFinish } from "./courseSchedule";

describe("canFinish", () => {
  it("allows a simple linear prerequisite chain", () => {
    expect(canFinish(2, [[1, 0]])).toBe(true);
  });

  it("detects a direct cycle", () => {
    expect(canFinish(2, [[1, 0], [0, 1]])).toBe(false);
  });

  it("allows courses with no prerequisites at all", () => {
    expect(canFinish(3, [])).toBe(true);
  });
});
