function reverseStringUsingStack(str){
let stack = [];

// push all characters to the stack
for(let char of str){
    stack.push(char);
}

let reverseStr = "";

console.log(stack.length);

// pop all characters from the stack
while (stack.length > 0) {
    reverseStr += stack.pop();
    console.log(reverseStr);
}

return reverseStr;
}


let original = "love";
let reversed = reverseStringUsingStack(original);
console.log(reversed);



