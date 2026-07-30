// height[i] is the height of a vertical line at position i.
// Find two lines that together with the x-axis form a container holding the most water.
// Input: [1,8,6,2,5,4,8,3,7] -> Output: 49
export function maxArea(height: number[]): number {
  var start = 0;
  var end = height.length-1;
  var maxArea = 0;
  while(start < end){
    var w = end - start
    var h = Math.min(height[end],height[start])
    var area = w*h;
    maxArea = Math.max(maxArea, area)
    if(height[end] < height[start]){
      end--;
    } else {
      start++;
    }
  }
  return maxArea;
}
