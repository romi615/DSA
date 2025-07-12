class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class circularLinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      return;
    }

    let current = this.head;
    while (current.next !== this.head) {
      current = current.next;
    }
    current.next = newNode;
    newNode.next = this.head;
  }

  delete(value) {
    if (!this.head) {
      console.log("list is empty!");
      return;
    }

    let current = this.head;
    let prev = null;

    // if head node to be deleted
    if (current.data == value) {
      // find last node
      while (current.next !== this.head) {
        current = current.next;
      }
      if (this.head == this.head.next) {
        // only one node
        this.head = null;
      } else {
        current.next = this.head.next;
        this.head = this.head.next;
      }
      return;
    }

    prev = this.head;
    current = this.head.next;

    while (current !== this.head) {
      if (current.data === value) {
        prev.next = current.next;
        return;
      }
      prev = current;
      current = current.next;
    }

    console.log("node not found");
  }

  display() {
    if (!this.head) {
      console.log("list is empty!");
      return;
    }

    let current = this.head;
    // let result = "";
    do {
      //   result += current.data + " -> ";
      console.log(current.data);
      current = current.next;
    } while (current !== this.head);
    // console.log(result + this.head.data);
  }
}

// const CLL = new circularLinkedList();

// CLL.insert(10);
// CLL.insert(20);
// CLL.insert(30);
// CLL.insert(40);
// CLL.insert(50);
// CLL.display();

// CLL.delete(10);
// CLL.display();

/*function removeCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  }

  if (fast === null && fast.next === null) {
    return;
  }

  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = null;
}*/

function startCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  }

  if (fast === null && fast.next === null) {
    return;
  }

  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  // slow.next = null;

  if (slow === fast) return slow.data;
}

let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);
let node4 = new Node(40);
let node5 = new Node(50);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

node5.next = node2;
console.log(hasCycle(node1));
// removeCycle(node1);
console.log(startCycle(node1));
// console.log(hasCycle(node1));

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
