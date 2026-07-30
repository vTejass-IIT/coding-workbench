import { describe, it, expect } from "vitest";
import { candy } from "./candy";

describe("candy", () => {
  it("distributes candy respecting the neighbor-rating rule", () => {
    expect(candy([1, 0, 2])).toBe(5);
  });

  it("gives everyone 1 candy when ratings are flat", () => {
    expect(candy([1, 1, 1])).toBe(3);
  });

  it("handles a strictly increasing run", () => {
    expect(candy([1, 2, 3, 4])).toBe(10); // 1+2+3+4
  });
});
