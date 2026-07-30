import { describe, it, expect } from "vitest";
import { fullJustify } from "./textJustification";

describe("fullJustify", () => {
  it("distributes extra spaces to the leftmost gaps", () => {
    const words = ["This", "is", "an", "example", "of", "text", "justification."];
    expect(fullJustify(words, 16)).toEqual([
      "This    is    an",
      "example  of text",
      "justification.  ",
    ]);
  });

  it("left-justifies the last line with single spaces and trailing padding", () => {
    const words = ["What", "must", "be", "acknowledgment", "shall", "be"];
    expect(fullJustify(words, 16)).toEqual([
      "What   must   be",
      "acknowledgment  ",
      "shall be        ",
    ]);
  });

  it("pads a single-word line fully with trailing spaces", () => {
    expect(fullJustify(["word"], 8)).toEqual(["word    "]);
  });
});
