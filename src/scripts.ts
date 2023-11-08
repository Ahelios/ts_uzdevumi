import $ from "jquery";
import sum from "./utils/sum/sum";

console.log("Ready for coding");

console.log("Body jQuery node:", $("body"));
console.log("Body javascript node:", document.querySelector("body"));
console.log("2 + 3 =", sum(2, 3));

// -------------------1.)-----------------------------------
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

const subtract = (a: number, b: number): number => a - b;

console.log(subtract(1, 2));
console.log(subtract(10, 5));
console.log(subtract(99, 1));

// -------------------2.)-----------------------------------
// Write a function that takes a value as argument
// Return the type of the value

const checkType = (a: any): any => typeof a;

console.log(checkType(1));
console.log(checkType(false));
console.log(checkType({}));
console.log(checkType(null));
console.log(checkType("string"));
console.log(checkType(["array"]));

// -------------------3.)-----------------------------------
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const totalEquality = (a: any, b: any): any => a === b;

console.log(totalEquality(2, 3));
console.log(totalEquality(3, 3));
console.log(totalEquality(1, "1"));
console.log(totalEquality("10", "10"));

// -------------------4.)-----------------------------------
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

const returnStringChar = (a: string, n: number): string => a[n];

console.log(returnStringChar("abcd", 1));
console.log(returnStringChar("zyxbwpl", 5));
console.log(returnStringChar("gfedcba", 3));

// -------------------5.)-----------------------------------
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

const returnWithoutThree = (a: string): string => a.substring(3);

console.log(returnWithoutThree("abcdefg"));
console.log(returnWithoutThree("1234"));
console.log(returnWithoutThree("fgedcba"));

// -------------------6.)-----------------------------------
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

const returnLastThree = (a: string): string => a.substring(a.length - 3);

console.log(returnLastThree("abcdefg"));
console.log(returnLastThree("1234"));
console.log(returnLastThree("fgedcba"));

// -------------------7.)-----------------------------------
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

const returnFirstThree = (a: string): string => a.substring(0, 3);

console.log(returnFirstThree("abcdefg"));
console.log(returnFirstThree("1234"));
console.log(returnFirstThree("fgedcba"));

// -------------------8.)-----------------------------------
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

const returnFirstHalf = (a: string): string =>
  a.slice(0, Math.floor(a.length / 2));

console.log(returnFirstHalf("abcdefgh"));
console.log(returnFirstHalf("1234"));
console.log(returnFirstHalf("gedcba"));

// -------------------9.)-----------------------------------
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

const returnExceptFirstThree = (a: string): string => a.slice(0, -3);

console.log(returnExceptFirstThree("abcdefg"));
console.log(returnExceptFirstThree("1234"));
console.log(returnExceptFirstThree("fgedcba"));

// -------------------10.)-----------------------------------
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

const returnPercentage = (a: number, b: number): number => (b / 100) * a;

console.log(returnPercentage(100, 50));
console.log(returnPercentage(10, 1));
console.log(returnPercentage(500, 25));

// -------------------11.)-----------------------------------
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order

const returnArithmeticCal = (
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number
): number => (((a + b - c) * d) / e) ** f;

console.log(returnArithmeticCal(6, 5, 4, 3, 2, 1));
console.log(returnArithmeticCal(6, 2, 1, 4, 2, 3));
console.log(returnArithmeticCal(2, 3, 6, 4, 2, 3));

// -------------------12.)-----------------------------------
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

const checkEvenNumber = (a: number): boolean => a % 2 === 0;

console.log(checkEvenNumber(10));
console.log(checkEvenNumber(-4));
console.log(checkEvenNumber(5));
console.log(checkEvenNumber(-111));

// -------------------13.)-----------------------------------
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

const numberOfDelimeters = (a: string, b: string): number =>
  b.split(a).length - 1;

console.log(
  numberOfDelimeters(
    "m",
    "how many times does the character occur in this sentence?"
  )
);
console.log(
  numberOfDelimeters(
    "h",
    "how many times does the character occur in this sentence?"
  )
);
console.log(
  numberOfDelimeters(
    "?",
    "how many times does the character occur in this sentence?"
  )
);
console.log(
  numberOfDelimeters(
    "z",
    "how many times does the character occur in this sentence?"
  )
);

// -------------------14.)-----------------------------------
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

const returnInteger = (a: number): boolean => Number.isInteger(a);

console.log(returnInteger(4));
console.log(returnInteger(1.123));
console.log(returnInteger(1048));
console.log(returnInteger(10.48));

// -------------------15.)-----------------------------------
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

const checkVariableSize = (a: number, b: number): number => {
  if (a < b) {
    return a / b;
  }
  return a * b;
};

console.log(checkVariableSize(10, 100));
console.log(checkVariableSize(90, 45));
console.log(checkVariableSize(8, 20));
console.log(checkVariableSize(2, 0.5));

// -------------------16.)-----------------------------------
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

const returnBasedOnContainment = (a: string, b: string): string => {
  if (a.includes(b)) {
    return b + a;
  }
  return a + b;
};

console.log(returnBasedOnContainment("cheese", "cake"));
console.log(returnBasedOnContainment("lips", "s"));
console.log(returnBasedOnContainment("Java", "script"));
console.log(returnBasedOnContainment(" think, therefore I am", "I"));

// -------------------17.)-----------------------------------
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

const roundTwoDigits = (a: number): number => Math.round(a * 100) / 100;

console.log(roundTwoDigits(2.12397));
console.log(roundTwoDigits(3.136));
console.log(roundTwoDigits(1.12397));
console.log(roundTwoDigits(26.1379));

// -------------------18.)-----------------------------------
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

const returnNumberToArray = (a: number): number[] =>
  a.toString().split("").map(Number);

console.log(returnNumberToArray(10));
console.log(returnNumberToArray(931));
console.log(returnNumberToArray(193278));

// -------------------19.)-----------------------------------
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

const fixCorruptedStrings = (a: string, b: string): string => {
  const cleanedStringA = a.replace(/%/g, "");
  const cleanedStringB = b.replace(/%/g, "");
  const cleanedStringBReversed = cleanedStringB.split("").reverse().join("");

  return cleanedStringA.concat(cleanedStringBReversed);
};

console.log(fixCorruptedStrings("java", "tpi%rcs"));
console.log(fixCorruptedStrings("c%ountry", "edis"));
console.log(fixCorruptedStrings("down", "nw%ot"));

// -------------------20.)-----------------------------------
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

function checkPrimeValue(a) {
  function isPrime(num) {
    if (num < 2) return false; // Add this line to handle numbers less than 2
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  while (!isPrime(a)) {
    a++;
  }

  return a;
}

console.log(checkPrimeValue(38));
console.log(checkPrimeValue(7));
console.log(checkPrimeValue(115));
console.log(checkPrimeValue(2000));

// -------------------20.)-----------------------------------
