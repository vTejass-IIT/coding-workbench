// grid is a 2D array of "1" (land) and "0" (water). Count islands (connected land, 4-directionally).
// Input: [["1","1","0"],["1","0","0"],["0","0","1"]] -> Output: 2
export function numIslands(grid: string[][]): number {
  var row = grid.length;
  var cols = grid[0].length;
  var visitedCounter = 0;
 
  for(var i=0;i<row;i++){
    for(var j=0;j<cols;j++){
      if(grid[i][j] == "1"){
        visitedCounter++;
        floodFill(grid,i,j)
      }
      
    }
  }
  function inrange(r,c){
    if(r >= 0 && r < row && c >= 0 && c < cols){
      return true;
    }
    return false;
  }
  function floodFill(grid, r,c){
    if(!inrange(r,c) || grid[r][c]!="1"){
      return
    }
    grid[r][c] = 'visited';
    // check surrounding: row
    floodFill(grid, r+1, c);
    floodFill(grid, r-1,c)
    
    //check surroundign: col
    floodFill(grid, r, c+1)
    floodFill(grid, r, c-1)
  }

  return visitedCounter;
}
