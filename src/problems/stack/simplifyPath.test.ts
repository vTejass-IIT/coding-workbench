import { describe, it, expect } from "vitest";
import { simplifyPath } from "./simplifyPath";

describe("simplifyPath", () => {
  it("resolves . and .. segments", () => {
    expect(simplifyPath("/a/./b/../../c/")).toBe("/c");
  });

  it("collapses repeated slashes", () => {
    expect(simplifyPath("/home//foo/")).toBe("/home/foo");
  });

  it("clamps .. at the root instead of erroring", () => {
    expect(simplifyPath("/../")).toBe("/");
  });
});
