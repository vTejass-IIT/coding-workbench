import { describe, it, expect } from "vitest";
import { isIsomorphic } from "./isomorphicStrings";

describe("isIsomorphic", () => {
  it("recognizes an isomorphic pair", () => {
    expect(isIsomorphic("egg", "add")).toBe(true);
  });

  it("rejects a mapping that isn't one-to-one", () => {
    expect(isIsomorphic("foo", "bar")).toBe(false);
  });

  it("rejects two source characters mapping to the same target", () => {
    expect(isIsomorphic("badc", "baba")).toBe(false);
  });
});
