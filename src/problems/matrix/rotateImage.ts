// Rotate an n x n matrix 90 degrees clockwise, in place.
// Input:  [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]  (mutate `matrix` directly; return value is for test convenience)
export function rotate(matrix: number[][]): number[][] {
  var i=0;
  var j=0;
  var cols = matrix[0].length -1;
  var rows = matrix.length -1
  for(var i=0;i<=rows;i++){
    for(var j=i;j<=rows;j++){
      var temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
  console.log(matrix)
  for (var i=0;i<=rows;i++){
    var left =0;
    var right = rows;
    while(left<right){
      var temp = matrix[i][left];
      matrix[i][left] = matrix[i][right];
      matrix[i][right]=temp;
      left++
      right--
    }
  }
return matrix
}
