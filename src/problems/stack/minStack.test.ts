import { describe, it, expect } from "vitest";
import { MinStack } from "./minStack";

describe("MinStack", () => {
  it("tracks the minimum as elements are pushed and popped", () => {
    const stack = new MinStack();
    stack.push(-2);
    stack.push(0);
    stack.push(-3);
    expect(stack.getMin()).toBe(-3);
    stack.pop();
    expect(stack.top()).toBe(0);
    expect(stack.getMin()).toBe(-2);
  });

  it("handles duplicate minimums correctly across pops", () => {
    const stack = new MinStack();
    stack.push(1);
    stack.push(1);
    stack.push(2);
    expect(stack.getMin()).toBe(1);
    stack.pop();
    expect(stack.getMin()).toBe(1);
    stack.pop();
    expect(stack.getMin()).toBe(1);
  });
});
