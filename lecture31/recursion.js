/*function factorial(n) {
  // base case
  if (n === 0) {
    return 1;
  }

  // recursive case

//   let biggerProblem = n;
//   let smallerProblem = n - 1;

//   let result = biggerProblem * factorial(smallerProblem);

//   return result;
}

console.log(factorial(5));
*/

// function fibonacci(n) {
//   // Base case
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   // Recursive case
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(3)); // Output: 8

// function printNumbers(n){
//    // base case
//    if(n===0){
//       return;
//    }

//    // recursive case
//    printNumbers(n-1);

//    // processing
//    console.log(n);
// }

// console.log(printNumbers(5));

// function printNumbers(n){
//    // base case
//    if(n===0){
//       return;
//    }

//    // processing
//    console.log(n);

//    // recursive case
//    printNumbers(n-1);

// }

// printNumbers(5)

// function sumOfNum(n) {
//   if (n === 0) {
//     return 0;
//   }

//   return n + sumOfNum(n - 1);
// }

// console.log(sumOfNum(5));

// function power(base, exp) {
//   if (exp === 0) {
//     return 1;
//   }

//   return base * power(base, exp - 1);
// }

// console.log(power(2, 3));

function reverseString(str) {
  // String ko array me badlo (mutable banane ke liye)
  let arr = str.split("");

  function helper(s, e) {
    if (s >= e) {
      return;
    }

    // swap
    let temp = arr[s];
    arr[s] = arr[e];
    arr[e] = temp;

    // recursive call
    helper(s + 1, e - 1);
  }

  helper(0, arr.length - 1);

  // wapas string me join kardo
  return arr.join("");
}

console.log(reverseString("hello")); // "olleh"

