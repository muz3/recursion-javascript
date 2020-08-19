function isPalindrome(testVariable) {
  // Write your code here
  // if ( testVariable[0] !== testVariable[testVariable.length - 1]) {
  //   return false
  // }
  // else return isPalindrome(testVariable.substring(1, testVariable.length - 1))

  if (!testVariable) {
    return true
  }

  return (testVariable[0] === testVariable[testVariable.length - 1]) && isPalindrome(testVariable.substring(1, testVariable.length - 1))
}


console.log(isPalindrome("madam"))