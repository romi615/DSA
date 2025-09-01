class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  insertAtPos(data, index) {
    if (index === 1) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let cnt = 1;

    while (cnt < index - 1 && current.next !== null) {
      current = current.next;
      cnt++;
    }

    const newNode = new Node(data);

    if (current.next === null) {
      current.next = newNode;
      newNode.prev = current;
      newNode.next = null;
      return;
    }

    newNode.next = current.next;
    current.next.prev = newNode;
    current.next = newNode;
    newNode.prev = current;

  }

  delete(index) {
    if (index === 1) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let prev = null;
    let count = 0;

    while (count < index - 1 && current.next !== null) {
      prev = current;
      current = current.next;
      count++;
    }

    if (current.next === null) {
      prev.next = current.next;
      return;
    }

    current.next.prev = prev;
    prev.next = current.next;
  }

  printForward() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " <-> ";
      current = current.next;
    }
    console.log(result + "null");
  }

  printBackward() {
    let current = this.tail;
    let result = "";
    while (current) {
      result += current.data + " <-> ";
      current = current.prev;
    }
    console.log(result + "null");
  }
}

const dll = new DoublyLinkedList();

dll.append(10);
dll.append(20);
dll.append(30);


// dll.prepend(10);
// dll.prepend(20);
// dll.prepend(30);

dll.printForward();
// dll.printBackward();

dll.insertAtPos(50, 5);
dll.printForward();

// dll.printForward();
// dll.printBackward();

// dll.delete(5);
// dll.printForward();
