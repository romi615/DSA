
// 1st way
/*function pushAtBottom(stack, x) {
  function solve(stack, x) {
    if (stack.length === 0) {
      stack.push(x);
      return;
    }

    // remove top element
    let top = stack.pop();

    // recursive call
    solve(stack, x);

    // push top element back
    stack.push(top);
  }

  solve(stack, x);
  return stack; // return final stack
}

let stack = [7, 1, 4, 5];
let x = 9;

let res = pushAtBottom(stack, x);
console.log(res);
*/

// 2nd way
function pushAtBottom(stack, x){

  if(stack.length === 0){
    stack.push(x);
    return;
  }

  let num = stack.pop();

  pushAtBottom(stack, x);

  stack.push(num);

  return stack;
}

let stack = [7, 1, 4, 5];
let x = 9;

let res = pushAtBottom(stack, x);
console.log(res);


