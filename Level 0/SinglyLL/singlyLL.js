class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  prepand(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  delete(data) {
    if (!this.head) {
      console.log("empty list!");
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }
  
  insertAt(data, index) {
    const newNode = new Node(data);

    if (index === 1) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let prev = null;
    let i = 0;

    while (current && i < index - 1) {
      prev = current;
      current = current.next;
      i++;
    }

    prev.next = newNode;
    newNode.next = current;
  }

  print() {
    if (!this.head) {
      console.log("empty list!");
      return;
    }
    let current = this.head;
    let output = "";
    while (current) {
      output += current.data + " -> ";
      current = current.next;
    }
    output += "null";
    console.log(output);
  }
}

const myList = new LinkedList();
// console.log(myList);
myList.append(10);
myList.append(20);
myList.append(30);
myList.print();

// myList.prepand(90);
// myList.print();

// myList.append(40);
// myList.append(30);

// myList.print();

// myList.delete(20);
// myList.print();

// console.log(myList);

myList.insertAt(100, 6);
myList.print();
