// function insertAtBottom(stack, x) {
//   if (stack.length === 0) {
//     stack.push(x);
//     return;
//   }

//   let num = stack.pop();

//   insertAtBottom(stack, x);

//   stack.push(num);
// }
// function reverseStack(s) {
//   if (s.length === 0) {
//     return;
//   }

//   let num = s.pop();

//   reverseStack(s);

//   insertAtBottom(s, num);

//   return stack;
// }

// let stack = [5, 4, 3, 2, 1];
// let res = reverseStack(stack);
// console.log(res);
