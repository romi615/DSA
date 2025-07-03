let secondMax = function (x) {
  x.sort((a, b) => {
    return a - b;
  });

  for (let i = x.length - 1; i >= 0; ) {
    if (x[i] === x[i - 1] && i > 0) {
      --i;
    } else if (x[i] !== x[i - 1] && i > 0) {
      return x[i - 1];
    } else if (x[i] !== x[x.length - 1]) {
      return x[i];
    } else {
      return -1;
    }
  }
};

console.log(secondMax([7,8,8,4,3,1]));
