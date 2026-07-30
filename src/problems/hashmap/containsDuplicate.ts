// Return true if any value appears at least twice in the array.
// Input: [1,2,3,1] -> Output: true
// Input: [1,2,3,4] -> Output: false
export function containsDuplicate(input: number[]): boolean{
  const traceMap = new Map<number, number>();
  for(const num of input){
    if(!traceMap.has(num)){
      traceMap.set(num,1)
    } else {
      return true
    }
  }
  return false;
}
