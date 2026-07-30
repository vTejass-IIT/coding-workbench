import { describe, it, expect } from "vitest";
import { minMutation } from "./minimumGeneticMutation";

describe("minMutation", () => {
  it("finds a single mutation", () => {
    expect(minMutation("AACCGGTT", "AACCGGTA", ["AACCGGTA"])).toBe(1);
  });

  it("finds a multi-step mutation path", () => {
    expect(minMutation("AACCGGTT", "AAACGGTA", ["AACCGGTA", "AACCGCTA", "AAACGGTA"])).toBe(2);
  });

  it("returns -1 when endGene is not in the bank", () => {
    expect(minMutation("AACCGGTT", "AAACGGTA", ["AACCGGTA", "AACCGCTA"])).toBe(-1);
  });
});
