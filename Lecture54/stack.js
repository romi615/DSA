/*class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow (stack is empty)";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "No elements in stack";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  printStack() {
    console.log(this.items.join(" "));
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.printStack();
stack.pop();
stack.printStack();
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow (stack is empty)";
    }
    const removedValue = this.top.value;
    this.top = this.top.next;
    this.length--;
    return removedValue;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.top.value;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === null;
  }

  printStack() {
    let curr = this.top;
    let output = "";
    while (curr) {
      output += curr.value + " ";
      curr = curr.next;
    }
    console.log(output.trim());
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.printStack();

stack.pop();
stack.printStack();

console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
