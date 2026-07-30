// Reshape an m x n matrix into an r x c matrix, preserving row-major element order.
// If the reshape isn't possible (r*c !== m*n), return the original matrix unchanged.
// Input: mat=[[1,2],[3,4]], r=1, c=4 -> Output: [[1,2,3,4]]
export function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  var m = mat.length;
  var n = mat[0].length;

  if(m*n !== r*c){
    return mat
  }
  var rcFlatArr = Array.from({length:r}, ()=> new Array(c).fill(0));
  // console.log(rcFlatArr)
  var arrLen = m*n - 1;
  for(var i=0;i<m;i++){
    for(var j=0;j<n;j++){
      var flatIndex = i*n +j;
      var destRow = Math.floor(flatIndex/c)
      var destCol = flatIndex%c;
      rcFlatArr[destRow][destCol]= mat[i][j]
    }
  }
  return rcFlatArr
}