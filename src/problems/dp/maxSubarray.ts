// Kadane's algorithm. Find the contiguous subarray (non-empty) with the largest sum.
// Input: [-2,1,-3,4,-1,2,1,-5,4] -> Output: 6  (subarray [4,-1,2,1])
export function maxSubArray(nums: number[]): number {
  var maxSum = nums[0]
  var curSum = nums[0]
  for(let i=1;i<nums.length;i++){

    console.log("incoming",nums[i])
    curSum = Math.max(nums[i], curSum+nums[i])
    maxSum = Math.max(curSum,maxSum)
    console.log("maxSum",maxSum)
  }
  return maxSum;
}
