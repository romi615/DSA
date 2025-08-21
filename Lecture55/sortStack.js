function sortInsert(s, n) {
  if (s.length === 0 || s[s.length-1] < n) {
    s.push(n);
    return;
  }

  let num = s.pop();
  
  sortInsert(s, n);
  s.push(num);
}

function sortStack(s) {
  if (s.length === 0) {
    return;
  }

  let num = s.pop();
  

  sortStack(s);

  sortInsert(s, num);

  return s;
}

let s = [5, -2, 9, -7, 3];
let res = sortStack(s);
console.log(s);
