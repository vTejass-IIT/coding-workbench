import { describe, it, expect } from "vitest";
import { MedianFinder } from "./findMedianFromDataStream";

describe("MedianFinder", () => {
  it("computes the median after each insertion", () => {
    const mf = new MedianFinder();
    mf.addNum(1);
    mf.addNum(2);
    expect(mf.findMedian()).toBe(1.5);
    mf.addNum(3);
    expect(mf.findMedian()).toBe(2);
  });

  it("handles a single value", () => {
    const mf = new MedianFinder();
    mf.addNum(5);
    expect(mf.findMedian()).toBe(5);
  });

  it("handles values arriving out of order", () => {
    const mf = new MedianFinder();
    [5, 2, 8, 1].forEach((n) => mf.addNum(n));
    expect(mf.findMedian()).toBe(3.5); // sorted: 1,2,5,8
  });
});
