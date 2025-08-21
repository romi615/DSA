function rectanglePattern(n) {
  for (let i = 0; i < n; i++) {
    let res = "";
    for (let j = 0; j < n; j++) {
      res += "*";
    }
    console.log(res);
  }
}

let n = 5;
rectanglePattern(n);