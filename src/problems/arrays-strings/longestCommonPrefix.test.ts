import { describe, it, expect } from "vitest";
import { longestCommonPrefix } from "./longestCommonPrefix";

describe("longestCommonPrefix", () => {
  it("finds a shared prefix", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });

  it("returns empty string when there is no common prefix", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });

  it("handles a single string", () => {
    expect(longestCommonPrefix(["alone"])).toBe("alone");
  });
});
