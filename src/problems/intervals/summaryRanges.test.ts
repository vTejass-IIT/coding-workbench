import { describe, it, expect } from "vitest";
import { summaryRanges } from "./summaryRanges";

describe("summaryRanges", () => {
  it("summarizes runs and single values", () => {
    expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(["0->2", "4->5", "7"]);
  });

  it("handles a single contiguous run", () => {
    expect(summaryRanges([0, 2, 3, 4, 6, 8, 9])).toEqual(["0", "2->4", "6", "8->9"]);
  });

  it("handles an empty array", () => {
    expect(summaryRanges([])).toEqual([]);
  });
});
