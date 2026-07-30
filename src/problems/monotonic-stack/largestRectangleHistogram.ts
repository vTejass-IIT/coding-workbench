// heights[i] is the height of a histogram bar of width 1. Find the area of the largest
// rectangle that fits entirely within the histogram.
// Input: [2,1,5,6,2,3] -> Output: 10  (bars at index 2,3 with height min(5,6)=5, width 2)
export function largestRectangleArea(heights: number[]): number {
  const stack: number[] = []; // indices, heights at these indices stay increasing bottom-to-top
  let maxArea = 0;
  const n = heights.length;

  for (let i = 0; i <= n; i++) {
    const currentHeight = i === n ? 0 : heights[i]; // sentinel forces final pops

    while (stack.length > 0 && heights[stack[stack.length - 1]] > currentHeight) {
      const poppedHeight = heights[stack.pop()!];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, poppedHeight * width);
    }

    stack.push(i);
  }

  return maxArea;
}
