import { describe, it, expect } from "vitest";
import { addBinary } from "./addBinary";

describe("addBinary", () => {
  it("adds two binary strings with a carry", () => {
    expect(addBinary("11", "1")).toBe("100");
  });

  it("adds longer binary strings", () => {
    expect(addBinary("1010", "1011")).toBe("10101");
  });

  it("handles single-bit inputs", () => {
    expect(addBinary("0", "0")).toBe("0");
  });
});
