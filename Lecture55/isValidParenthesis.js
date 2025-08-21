function isValid(str) {
  let stack = [];

  for (let char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;

      let top = stack[stack.length - 1];
      if (
        (char === ")" && top === "(") ||
        (char === "}" && top === "{") ||
        (char === "]" && top === "[")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

let str = "([)]";
console.log(isValid(str)); // true
