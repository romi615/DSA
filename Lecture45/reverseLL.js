class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let reverseList = function (head) {
  let curr = head;
  let prev = null;

  while (curr) {
    let forward = curr.next;
    curr.next = prev;
    prev = curr;
    curr = forward;
  }
  return prev;
};

let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);
let node4 = new Node(40);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = null;

let head = node1;
let temp = reverseList(head);
while (temp) {
    console.log(temp.data);
  temp = temp.next;
}
