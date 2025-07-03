var isPalindrome = function (x) {
  let s = 0;
  let num = String(x);
  let e = num.length - 1;

  while (s <= e) {
    if (num[s++] != num[e--]) return 0;
  }
  return 1;
};

console.log(isPalindrome(-10));
