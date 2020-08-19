function foo(string) {
  if (string.length === 0) {
    return 0;
  } else {
    return ("aeiouAEIOU".indexOf(string[0]) != -1) + foo(string.slice(1));
  }
}

// Driver Code
console.log(foo("thisisrecursion"));