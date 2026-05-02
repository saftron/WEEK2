function verifyPalindrome(str) {
  let chars = str.split("");
  let reversed = "";
  for (let i = chars.length - 1; i >= 0; i--) {
    reversed += chars[i];
  }
  console.log("Original String:", str);
  console.log("Reversed String:", reversed);
  let isPalindrome = (str === reversed);

  console.log("Is Palindrome:", isPalindrome);
  return isPalindrome;
}
let testStrings = ["madam", "racecar", "hamam", "level"];

for (let str of testStrings) {
  verifyPalindrome(str);
}