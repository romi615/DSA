class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

var removeElements = function (head, val) {
  while (head !== null && head.data === val) {
    head = head.next;
  }

  let curr = head;

  while (curr && curr.next) {
    if (curr.next.data === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};

function display(head) {
  if (!head) {
    console.log("list is empty!");
    return;
  }
  let curr = head;
  let output = "";
  while (curr) {
    output = output + curr.data + " -> ";
    curr = curr.next;
  }
  console.log(output + "null");
}
let node1 = null
// let node1 = new Node(7);
// let node2 = new Node(7);
// let node3 = new Node(7);
// let node4 = new Node(7);
// let node5 = new Node(7);
// let node6 = new Node(7);
// let node7 = new Node(7);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;
// node5.next = node6;
// node6.next = node7;

display(node1);
let result = removeElements(node1, 7);
display(result);
