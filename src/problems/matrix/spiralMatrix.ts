// Return all elements of an m x n matrix in spiral order (clockwise, from the outside in).
// Input: [[1,2,3],[4,5,6],[7,8,9]] -> Output: [1,2,3,6,9,8,7,4,5]
export function spiralOrder(matrix: number[][]): number[] {
  const rows = matrix.length
  const cols = matrix[0].length
  let top =0;
  let bottom = rows -1
  let left = 0;
  let right = cols -1;
  var matrixCount = rows * cols
  var indexLookup = new Map();
  
  var spiralArr = []
    
    
    while(top <=bottom && left <=right){
      // walk left
      var i=0;
      while(i<= right && i >=left){
        // console.log("checking",top, i)
        spiralArr.push(matrix[top][i])
        i++;
      }
      top++;
      // walk down right
      
      var j=top;
      while(j<=bottom && j>=top){
        // console.log("checking",j, right)
        spiralArr.push(matrix[j][right])
        j++;
      }
      right--;
      
      // walk bottom left
      var k=right;
      if(top<=bottom){
        while(k<=right && k>=left){
          // console.log("checking", bottom,k)
          spiralArr.push(matrix[bottom][k])
          k--;
        }
      }
      bottom--;
      var l=0;
      console.log(top,left,right,bottom)
      if(left<=right && top <=bottom){
        while(l>=left && l<=right){
          console.log("checking",top,l)
          spiralArr.push(matrix[top][l])
          l++;
        }
        left++
      }
    }
  return spiralArr
  // throw new Error("not implemented");
}

