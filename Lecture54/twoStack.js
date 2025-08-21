class TwoStacks {
  constructor(size) {
    this.size = size;
    this.arr = new Array(size);
    this.top1 = -1; // Stack 1 starts from left
    this.top2 = size; // Stack 2 starts from right
  }

  // Push for Stack 1
  push1(x) {
    if (this.top1 < this.top2 - 1) {
      this.top1++;
      this.arr[this.top1] = x;
    } else {
      console.log("Stack Overflow for Stack 1");
    }
  }

  // Push for Stack 2
  push2(x) {
    if (this.top1 < this.top2 - 1) {
      this.top2--;
      this.arr[this.top2] = x;
    } else {
      console.log("Stack Overflow for Stack 2");
    }
  }

  // Pop for Stack 1
  pop1() {
    if (this.top1 >= 0) {
      let x = this.arr[this.top1];
      this.top1--;
      console.log(x);
    } else {
      console.log("Stack Underflow for Stack 1");
    }
  }

  // Pop for Stack 2
  pop2() {
    if (this.top2 < this.size) {
      let x = this.arr[this.top2];
      this.top2++;
      console.log(x);
    } else {
      console.log("Stack Underflow for Stack 2");
    }
  }

  print() {
    console.log("Array:", this.arr);
    console.log("Stack 1 top:", this.top1);
    console.log("Stack 2 top:", this.top2);
  }
}

let ts = new TwoStacks(10);

ts.push1(1);
ts.push1(2);
ts.push1(3);

ts.push2(100);
ts.push2(200);

ts.print();

console.log("Pop from Stack 1:", ts.pop1());
console.log("Pop from Stack 2:", ts.pop2());

// ts.print();
