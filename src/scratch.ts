// m x n binary grid, 0 = open, 1 = wall. Return the length (in cells, including start and end)
// of the shortest 4-directional path from (0,0) to (m-1,n-1). Return -1 if none exists.
// Input: [[0,0,0],[0,1,0],[0,0,0]] -> Output: 5
export function shortestPathInMaze(grid: number[][]): number {
  
  var row = grid.length;
  var cols = grid[0].length;
  var pathCount = 0;
  for(var i=0;i<row;i++){
    for(var j =0;i<cols;j++){
      if(grid[i][j] == 0){
        pathCount++;
        findSurrounding(grid,i,j)
      }
    }
  }
  function bounds(r,c){
    if(r>=0 && r<row && c>=0 && c< cols)
      return true;
    return false;
  }
  function findSurrounding(grid, r, c){
    if(!bounds(r,c) || grid[r][c]!=0){
      return;
    }
    grid[r][c] = -1
    findSurrounding(grid, r+1,c)
    findSurrounding(grid, r-1,c)
    findSurrounding(grid, r,c+1)
    findSurrounding(grid, r,c-1)
  }
  return pathCount;
}



console.log(shortestPathInMaze([[0,0,0],[0,1,0],[0,0,0]]))
