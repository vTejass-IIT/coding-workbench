// Given a string of '(){}[]', determine if the brackets are validly matched/nested.
// Input: "([{}])" -> Output: true
// Input: "([)]" -> Output: false
export function isValid(s: string): boolean {
  var stack:string[] = []
  var opening = ["[","{","("]
  var closing = ["]","}",")"]
  
  for(let i=0;i<s.length;i++){
    if(stack.length ==0 && closing.includes(s[i])){
      return false
    }
    if(opening.includes(s[i])){
      stack.push(s[i])
    } else if(closing.includes(s[i])){
      var curItem = stack[stack.length-1]
      if((curItem == "{" && s[i]!="}") || (curItem == "[" && s[i]!="]") || (curItem == "(" && s[i]!=")") ){
        return false
      } else {
        stack.pop();
      }
    }
  
  
  // for(let i=0;i<s.length;i++){
  //   if(stack.length == 0){
  //     if(!closing.includes(s[i])){
  //       stack.push(s[i])
  //     }
  //     else {
  //       return false
  //     }
  //   } else if(closing.includes(s[i])){
  //     var curItem = stack[stack.length-1];
  //     if((curItem == "{" && s[i]!="}") || (curItem == "[" && s[i]!="]") || (curItem == "(" && s[i]!=")") ){
  //       return false
  //     }
  //     else{
  //       stack.push(s[i])
  //     }
  //   } else {
  //    stack.push(s[i])
  //   }
  } 
  return stack.length==0;
}