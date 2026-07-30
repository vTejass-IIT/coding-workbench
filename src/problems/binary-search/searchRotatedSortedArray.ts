// nums was sorted ascending then rotated at some pivot. Find target's index in O(log n), or -1.
// Input: nums=[4,5,6,7,0,1,2], target=0 -> Output: 4
export function search(nums: number[], target: number): number {
  var left =0;
  var right = nums.length-1;
  while(left<=right){
    var mid = Math.floor((left+right)/2)
    if(nums[mid] == target) return mid;
    if(nums[left] <= nums[mid]){
      // in left side
      if(nums[left] <= target && target < nums[mid]){
        right = mid-1;
      }else{
        left = mid+1
      }
    } else {
      //other half sorted
      if(nums[right] >= target && target > nums[mid]){
        left = mid+1
      } else {
        right = mid -1
      }
    }
  }
  return -1
}
