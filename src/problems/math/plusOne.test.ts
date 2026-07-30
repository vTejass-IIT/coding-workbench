import { describe, it, expect } from "vitest";
import { plusOne } from "./plusOne";

describe("plusOne", () => {
  it("increments without carrying", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });

  it("carries through a run of trailing 9s", () => {
    expect(plusOne([1, 9, 9])).toEqual([2, 0, 0]);
  });

  it("grows the digit array when all digits are 9", () => {
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });
});
