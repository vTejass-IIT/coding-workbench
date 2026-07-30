// Generate an n x n matrix filled with 1..n^2 in spiral order.
// Input: n=3 -> Output: [[1,2,3],[8,9,4],[7,6,5]]
export function generateMatrix(n: number): number[][] {

  var top = 0;
  var left = 0;
  var bottom = n -1;
  var right = n -1;
  var genArray:any[][]= []
  var i = 1;
  for(let i=0;i<n;i++){
    genArray[i]=[]
  }
  var iterator = 0;
  while(top<=bottom && left<=right){
    // top->right
    // i -> right; top++
    console.log("\n\n\n\n")
    // iterator = right;
    while(iterator >=left && iterator<=right){
      genArray[top][iterator] = i;
      i++;
      iterator++;
    }
    top++;
    iterator = top;
    console.log("end of top->right iter",iterator,"top:",top," right:", right," bottom:",bottom," left:",left)
    // right->bottom
    // i->bottom; right--
   
    while(iterator >=top && iterator<=bottom){
      genArray[iterator][right] = i;
      i++
      iterator++;
    }
    right--;
    iterator = right;
    console.log("end of right->bottom top:",top," right:", right," bottom:",bottom," left:",left)
    // bottom->left
    // i->left->bottom--

    while(iterator <=right && iterator>=left){
      genArray[bottom][iterator] = i;
      i++;
      iterator--;
    }
    bottom--;
    iterator=bottom;
  console.log("end of bottom->left top:",top," right:", right," bottom:",bottom," left:",left)
    
    // bottom->top
    //i->top left++
    while(iterator<=bottom && iterator>=top){
      genArray[iterator][left] = i;
      i++;
      iterator--;
    }
    left++;
    iterator=left;

    console.log("end of bottom->top top:",top," right:", right," bottom:",bottom," left:",left)
    


  }
  return genArray
  
}
