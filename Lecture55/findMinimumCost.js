function findMinimumCost(str) {
  // odd condition
  if (str.length % 2 !== 0) {
    return -1;
  }

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch === "{") {
      stack.push(ch);
    } else {
      // ch is closed braces

      if (stack.length !== 0 && stack[stack.length - 1] === "{") {
        stack.pop();
      } else {
        stack.push(ch);
      }
    }
  }

  // stack constains invalid expression

  let a = 0,
    b = 0;

  while (stack.length !== 0) {
    if (stack[stack.length - 1] === "{") {
      b++;
    } else {
      a++;
    }
    stack.pop();
  }

  let ans = Math.floor((a + 1) / 2) + Math.floor((b + 1) / 2);

  return ans;
}

let str = "{{{}}";

console.log(findMinimumCost(str));
