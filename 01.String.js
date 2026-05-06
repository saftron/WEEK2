/* Given a string s consisting of words and spaces, return the length of the last word in the string.
Example 1:
Input: s = "Hello World"
Output: 5 
Explanation: The last word is "World" with length 5.*/

const s = "Hello World";
const arrayofString = s.split(" ");
console.log(arrayofString);
const lastWord = arrayofString.pop(); 
console.log(lastWord);
const lengthOfLastWord = lastWord.length;
console.log(lengthOfLastWord);

/* Example 2:
Input: s = " fly me to the moon "
Output: 4
Explanation: The last word is "moon" with length 4. */

const s2 =  " fly me to the moon ";
const trimmed = s2.trim();
console.log (trimmed);
const st2Word = trimmed.split(" ");
console.log(st2Word);
const lastWord2 = st2Word.pop();
console.log(lastWord2);
const lengthOfLastWord2 = lastWord2.length;
console.log(lengthOfLastWord2);

/* Example 3: 
Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world') 
Output: false
Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters */

function isAnagram(str1, str2) {
    const string1 = str1.trim().toLowerCase();
    const string2 = str2.trim().toLowerCase();
    const sortedString1 = string1.split("").sort().join("");
    const sortedString2 = string2.split("").sort().join("");
    return sortedString1 === sortedString2;
}

isAnagram('listen', 'silent'); 
isAnagram('hello', 'world'); 

console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); // false

