// For each day, find how many days until a warmer temperature. 0 if none.
// Input: [73,74,75,71,69,72,76,73] -> Output: [1,1,4,2,1,1,0,0]
export function dailyTemperatures(temperatures: number[]): number[] {
  var stack:number[]= []
  var warmArr:number[] = new Array(temperatures.length).fill(0)
  for(let i=0;i<temperatures.length;i++){
    while(stack.length >0 && temperatures[stack[stack.length-1]] < temperatures[i]){
      var poppedIndex = stack.pop()!
      var diffCount = i - poppedIndex
      warmArr[poppedIndex] = diffCount
    }
    stack.push(i)
  }
  console.log(warmArr)
  return warmArr;
  
}
