// height[i] is the elevation at position i (width 1 each). Compute how much rainwater
// is trapped between the bars after it rains.

// Input: [0,1,0,2,1,0,1,3,2,1,2,1] -> Output: 6
export function trap(height: number[]): number {
  var stack:number[] = []
  var totalWater =0;
  for(let i=0;i<height.length;i++){
    while(stack.length> 0 && height[i] > height[stack[stack.length-1]]){
      var valleyIndex = stack.pop()!;
      if(stack.length ==0)
        break;
      var leftWallIndex = stack[stack.length-1];
      var rigthWallIndex = i
      var boundaryHeight = Math.min(height[leftWallIndex],height[rigthWallIndex]) - height[valleyIndex]
      var width = i - leftWallIndex -1
      totalWater += width*boundaryHeight
    }
    stack.push(i)
  }
  return totalWater
}
