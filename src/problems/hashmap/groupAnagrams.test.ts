import { describe, it, expect } from "vitest";
import { groupAnagrams } from "./groupAnagrams";

function normalize(groups: string[][]): string[][] {
  return groups.map((g) => [...g].sort()).sort((a, b) => a[0].localeCompare(b[0]));
}

describe("groupAnagrams", () => {
  it("groups anagrams together", () => {
    const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
    expect(normalize(result)).toEqual(
      normalize([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]])
    );
  });

  it("handles empty strings", () => {
    expect(normalize(groupAnagrams([""]))).toEqual(normalize([[""]]));
  });

  it("handles single word", () => {
    expect(normalize(groupAnagrams(["abc"]))).toEqual(normalize([["abc"]]));
  });
});
