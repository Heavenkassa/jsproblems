//2. Write a function that takes two numbers as arguments and returns their sum.

const sum = (num1, num2) => num1 + num2;
console.log(sum(5,6))

// 4.Write a function that checks if a given string is a palindrome (reads the same backward as forward).

const palindrome = (text) => {
const reversedText =text.split("").reverse().join("")
return reversedText===text
}

console.log(palindrome("madam"))