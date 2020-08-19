function foo(n) {
  if (n > 100) {
    return n - 5;
  }
  let m = foo(n + 11)
  return foo(m);

}

console.log(foo(45))