function nextSmallerElement(arr, n) {
  let stack = [];
  stack.push(-1);
  let ans = [];

  for (let i = n - 1; i >= 0; i--) {
    let curr = arr[i];
    while (stack[stack.length - 1] >= curr) {
      stack.pop();
    }

    ans[i] = stack[stack.length - 1];
    stack.push(curr);
  }

  return ans;
}

let arr = [5, 0];

console.log(arr);
let length = arr.length;

let res = nextSmallerElement(arr, length);
console.log(res);
