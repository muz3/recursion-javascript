function sort(testVariable, length) {
  // Write your code here
  if (length <= 1) {
    return
  }
  sort(testVariable, length - 1)
  let lastElement = testVariable[length - 1]
  let temp = length - 2
  while (temp >= 0 && testVariable[temp] > lastElement) {
    testVariable[temp + 1] = testVariable[temp];
    temp = temp - 1;
  }
  testVariable[temp + 1] = lastElement

}