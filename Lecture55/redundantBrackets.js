function findRedundantBrackets(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch === "(" || ch === "+" || ch === "-" || ch === "*" || ch === "/") {
      stack.push(ch);
    } else {
      if (ch === ")") {
        let isRedundant = true;

        while (stack[stack.length - 1] !== "(") {
          let top = stack[stack.length - 1];

          if (top === "+" || top === "-" || top === "*" || top === "/") {
            isRedundant = false;
          }
          stack.pop();
        }
        if (isRedundant === true) {
          return true;
        }
        stack.pop();
      }
    }
  }
  return false;
}

let str = "(a*b+(c/d))";
let res = findRedundantBrackets(str) ? "Yes" : "NO";
console.log(res);
