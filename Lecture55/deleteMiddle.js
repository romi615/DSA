function deleteMiddle(stack) {
  const n = stack.length;
  const mid = Math.floor(n / 2);

  function removeMid(stack, current) {
    // Base case: when the middle element is reached
    if (current === mid) {
      stack.pop();
      return;
    }

    // Pop the top element and recurse
    const top = stack.pop();
    removeMid(stack, current + 1);

    // Push back all other elements after deletion
    stack.push(top);
  }
  
  removeMid(stack, 0);
}

// Example usage
let stack = [1, 2, 3, 4, 5]; // 5 elements → middle is 3
deleteMiddle(stack);
console.log(stack); // Output: [1, 2, 4, 5]
