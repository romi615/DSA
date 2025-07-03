var reverse = function (x) {
  var rev = 0;
  const INT_MAX = 2 ** 31 - 1; // 2147483647
  const INT_MIN = -(2 ** 31); // -2147483648

  while (x !== 0) {
    var digit = x % 10;
    x = Math.trunc(x / 10);
    if (
      rev > Math.trunc(INT_MAX / 10) ||
      (rev === Math.trunc(INT_MAX / 10) && digit > 7)
    ) {
      return 0;
    }
    if (
      rev < Math.trunc(INT_MIN / 10) ||
      (rev === Math.trunc(INT_MIN / 10) && digit < -8)
    ) {
      return 0;
    }
    rev = rev * 10 + digit;
  }
  return rev;
};
