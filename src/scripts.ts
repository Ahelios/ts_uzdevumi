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

const returnFirstHalf = (a: string): string => a.slice(0, Math.floor(a.length / 2));

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

const checkPrimeValue = (a:number) => {
  const isPrime = (num: number) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  while (!isPrime(a)) {
    a++;
  }

  return a;
};

console.log(checkPrimeValue(38));
console.log(checkPrimeValue(7));
console.log(checkPrimeValue(115));
console.log(checkPrimeValue(2000));

// -------------------21.)-----------------------------------
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

function returnNaturalNumber(x: number, y: number): number {
  if (x < 0) {
    if (x % y === 0) {
      return x;
    } else {
      return x - (x % y);
    }
  }

  if (x % y === 0) {
    return x;
  } else {
    return x + (y - (x % y));
  }
}

console.log(returnNaturalNumber(1, 23));
console.log(returnNaturalNumber(23, 23));
console.log(returnNaturalNumber(7, 3));
console.log(returnNaturalNumber(-5, 7));

// -------------------22.)-----------------------------------
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

const insertEveryThirdString = (a: string, b: string): string => {
  const newArray = a.split("");
  let resultArray: string[] = [];
  let counter = 0;

  for (let i = newArray.length - 1; i >= 0; i--) {
    resultArray.unshift(newArray[i]);
    counter++;

    if (counter % 3 === 0 && i !== 0) {
      resultArray.unshift(b);
    }
  }

  return resultArray.join("");
};

console.log(insertEveryThirdString("1234567", "."));
console.log(insertEveryThirdString("abcde", "$"));
console.log(insertEveryThirdString("zxyzxyzxyzxyzxyz", "w"));

// -------------------23.)-----------------------------------
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

const returnCorrectString = (str: string): string => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let correctStr = "";

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    const index = alphabet.indexOf(letter);

    if (index === -1 || index === 25) {
      correctStr += letter;
    } else {
      correctStr += alphabet[index + 1];
    }
  }

  return correctStr;
};

console.log(returnCorrectString("bnchmf"));
console.log(returnCorrectString("bgddrd"));
console.log(returnCorrectString("sdrshmf"));

// -------------------24.)-----------------------------------
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

const getNthElement = (a: number[], n: number): number => a[n - 1];

console.log(getNthElement([1, 2, 3, 4, 5], 3));
console.log(getNthElement([10, 9, 8, 7, 6], 5));
console.log(getNthElement([7, 2, 1, 6, 3], 1));

// -------------------25.)-----------------------------------
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

const removeFirstThree = (a: number[]): number[] => a.slice(3);

console.log(removeFirstThree([1, 2, 3, 4]));
console.log(removeFirstThree([5, 4, 3, 2, 1, 0]));
console.log(removeFirstThree([99, 1, 1]));

// -------------------26.)-----------------------------------
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

const getLastThree = (a: number[]): number[] => a.slice(-3);

console.log(getLastThree([1, 2, 3, 4]));
console.log(getLastThree([5, 4, 3, 2, 1, 0]));
console.log(getLastThree([99, 1, 1]));

// -------------------27.)-----------------------------------
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

const getFirstThree = (a: number[]): number[] => a.slice(0, 3);

console.log(getFirstThree([1, 2, 3, 4]));
console.log(getFirstThree([5, 4, 3, 2, 1, 0]));
console.log(getFirstThree([99, 1, 1]));

// -------------------28.)-----------------------------------
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

const getLastNElements = (a: number[], n: number): number[] => {
  if (n >= a.length) {
    return a;
  } else {
    return a.slice(-n);
  }
};

console.log(getLastNElements([1, 2, 3, 4, 5], 2));
console.log(getLastNElements([1, 2, 3], 6));
console.log(getLastNElements([1, 2, 3, 4, 5, 6, 7, 8], 3));

// -------------------29.)-----------------------------------
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

const cleanOutB = (a: any[], b: any): any[] => {
  const result: any[] = [];

  for (const item of a) {
    if (item !== b) {
      result.push(item);
    }
  }
  return result;
};

console.log(cleanOutB([1, 2, 3], 2));
console.log(cleanOutB([1, 2, "2"], "2"));
console.log(cleanOutB([false, "2", 1], false));
console.log(cleanOutB([1, 2, "2", 1], 1));

// -------------------30.)-----------------------------------
// Write a function that takes an array (a) as argument
// Return the number of elements in a

const lengthOfA = (a: number[]): number => a.length;

console.log(lengthOfA([1, 2, 2, 4]));
console.log(lengthOfA([9, 9, 9]));
console.log(lengthOfA([4, 3, 2, 1, 0]));

// -------------------31.)-----------------------------------
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

const countNegatives = (a: number[]): number => {
  let count = 0;

  for (const num of a) {
    if (num < 0) {
      count++;
    }
  }
  return count;
};

console.log(countNegatives([1, -2, 2, -4]));
console.log(countNegatives([0, 9, 1]));
console.log(countNegatives([4, -3, 2, 1, 0]));

// -------------------32.)-----------------------------------
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

const sortDescending = (a: number[]): number[] => a.sort((x, y) => y - x);

console.log(sortDescending([1, 3, 2]));
console.log(sortDescending([4, 2, 3, 1]));

// -------------------33.)-----------------------------------
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

const sortAlphabetically = (a: string[]): string[] => a.sort();

console.log(sortAlphabetically(["b", "c", "d", "a"]));
console.log(sortAlphabetically(["z", "c", "d", "a", "y", "a", "w"]));

// -------------------34.)-----------------------------------
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

const getAverage = (a: number[]): number => {
  let sum = 0;
  for (const num of a) {
    sum += num;
  }
  return sum / a.length;
};

console.log(getAverage([10, 100, 40]));
console.log(getAverage([10, 100, 1000]));
console.log(getAverage([-50, 0, 50, 200]));

// -------------------35.)-----------------------------------
// Write a function that takes an array of strings as argument
// Return the longest string

const getLongest = (a: string[]): string => {
  let longest: string = "";
  for (const str of a) {
    if (str.length > longest.length) {
      longest = str;
    }
  }
  return longest;
};

console.log(getLongest(["help", "me"]));
console.log(getLongest(["I", "need", "candy"]));

// -------------------36.)-----------------------------------
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

const allAreEqual = (a: any[]): boolean => {
  for (let i = 1; i < a.length; i++) {
    if (a[i] !== a[0]) {
      return false;
    }
  }
  return true;
};

console.log(allAreEqual([true, true, true, true]));
console.log(allAreEqual(["test", "test", "test"]));
console.log(allAreEqual([1, 1, 1, 2]));
console.log(allAreEqual(["10", 10, 10, 10]));

// -------------------37.)-----------------------------------
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

const combineAllArrays = (...allArrays: any[]): any[] => {
  let result: any[] = [];

  for (const oneArray of allArrays) {
    result = result.concat(oneArray);
  }
  return result;
};

console.log(combineAllArrays([1, 2, 3], [4, 5, 6]));
console.log(combineAllArrays(["a", "b", "c"], [4, 5, 6]));
console.log(combineAllArrays([true, true], [1, 2], ["a", "b"]));

// -------------------38.)-----------------------------------
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

type NumberObject = {
  [key: string]: number;
};

const sortByB = (a: NumberObject[]): NumberObject[] => a.sort((x, y) => x.b - y.b);


console.log(
  sortByB([
    { a: 1, b: 2 },
    { a: 5, b: 4 },
  ])
);
console.log(
  sortByB([
    { a: 2, b: 10 },
    { a: 5, b: 4 },
  ])
);
console.log(
  sortByB([
    { a: 1, b: 7 },
    { a: 2, b: 1 },
  ])
);

// -------------------39.)-----------------------------------
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

const combineAndOrderUnique = (a: number[], b: number[]): number[] => {
  const combined = a.concat(b);
  const unique: number[] = [];

  for (const value of combined) {
    if (unique.indexOf(value) === -1) {
      unique.push(value);
    }
  }

  return unique.sort((x, y) => x - y);
};

console.log(combineAndOrderUnique([1, 2, 3], [3, 4, 5]));
console.log(combineAndOrderUnique([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

// -------------------40.)-----------------------------------
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

const sumOfGreaterThanB = (a: number[], b: number): number => {
  let sum: number = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b) {
      sum += a[i];
    }
  }

  return sum;
};

console.log(sumOfGreaterThanB([1, 2, 3, 4, 5, 6, 7], 2));
console.log(sumOfGreaterThanB([-10, -11, -3, 1, -4], -3));
console.log(sumOfGreaterThanB([78, 99, 100, 101, 401], 99));

// -------------------41.)-----------------------------------
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

const rangeMinMax = (min: number, max: number): number[] => {
  const result: number[] = [];

  for (let i = min; i <= max; i++) {
    result.push(i);
  }

  return result;
};

console.log(rangeMinMax(2, 10));
console.log(rangeMinMax(1, 3));
console.log(rangeMinMax(-5, 5));
console.log(rangeMinMax(2, 7));

// -------------------42.)-----------------------------------
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

type NamesList = {
  [key: string]: string[];
};

const groupNames = (names: string[]) => {
  const groups: NamesList = {};

  for (const name of names) {
    const firstLetter = name[0].toLowerCase();

    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }

    groups[firstLetter].push(name);
  }
  return groups;
};

console.log(groupNames(["Alf", "Alice", "Ben"]));
console.log(groupNames(["Ant", "Bear", "Bird"]));
console.log(groupNames(["Berlin", "Paris", "Prague"]));

// -------------------43.)-----------------------------------
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

const addNumberOrZeroToStart = (elements: any[], number: number): any[] => {
  if (number >= 6) {
    return [number, ...elements];
  } else {
    return [0, ...elements];
  }
};

console.log(addNumberOrZeroToStart([1, 2, 3], 6));
console.log(addNumberOrZeroToStart(["a", "b"], 2));
console.log(addNumberOrZeroToStart([null, false], 11));

// -------------------44.)-----------------------------------
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

const getNthElements = (numbers: number[], n: number): number[] => numbers.filter((_, index) => (index + 1) % n === 0);

console.log(getNthElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(getNthElements([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5));
console.log(getNthElements([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2));

// -------------------45.)-----------------------------------
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

type Place = {
  country: string;
  continent: string;
};

const getCountryValue = (obj: Place): string => obj.country;

console.log(getCountryValue({ continent: "Asia", country: "Japan" }));
console.log(getCountryValue({ country: "Sweden", continent: "Europe" }));

// -------------------46.)-----------------------------------
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor

// most common types for next tasks objects

type StringsObject = {
  [key: string]: string;
};

type MixObject = {
  [key: string | number]: string | number;
};

type NumbersObject = {
  [key: string]: number;
};

const getProp2 = (obj: MixObject): any => obj["prop-2"];

console.log(getProp2({ one: 1, "prop-2": 2 }));
console.log(getProp2({ "prop-2": "two", prop: "test" }));

// -------------------47.)-----------------------------------
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

const getValueByKey = (obj: StringsObject, key: string): any => obj[key];

console.log(
  getValueByKey({ continent: "Asia", country: "Japan" }, "continent")
);
console.log(
  getValueByKey({ country: "Sweden", continent: "Europe" }, "country")
);

// -------------------48.)-----------------------------------
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

const hasB = (a: MixObject, b: string): boolean => a.hasOwnProperty(b);

console.log(hasB({ a: 1, b: 2, c: 3 }, "b"));
console.log(hasB({ x: "a", y: "b", z: "c" }, "a"));
console.log(hasB({ x: "a", y: "b", z: "c" }, "z"));

// -------------------49.)-----------------------------------
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

const createObject = (a: string): { key: string } => {
  return { key: a };
};

console.log(createObject("a"));
console.log(createObject("z"));
console.log(createObject("b"));

// -------------------50.)-----------------------------------
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

const createObject1 = (a: string, b: string): StringsObject => {
  return { [a]: b };
};

console.log(createObject1("a", "b"));
console.log(createObject1("z", "x"));
console.log(createObject1("b", "w"));

// -------------------51.)-----------------------------------
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

const createObject2 = (a: (string | number)[], b: any[]): MixObject => {
  const result: MixObject = {};

  a.forEach((key, index) => {
    result[key] = b[index];
  });

  return result;
};

console.log(createObject2(["a", "b", "c"], [1, 2, 3]));
console.log(createObject2(["w", "x", "y", "z"], [10, 9, 5, 2]));
console.log(createObject2([1, "b"], ["a", 2]));

// -------------------52.)-----------------------------------
// Write a function that takes an object (a) as argument
// Return an array with all object keys

const getKeys = (a: NumbersObject): string[] => {
  return Object.keys(a);
};

console.log(getKeys({ a: 1, b: 2, c: 3 }));
console.log(getKeys({ j: 9, i: 2, x: 3, z: 4 }));
console.log(getKeys({ w: 15, x: 22, y: 13 }));

// -------------------53.)-----------------------------------
// Write a function that takes an object (a) as argument
// Return the sum of all object values

const sumOfValues = (a: NumbersObject): number => {
  return Object.values(a).reduce((sum, value) => sum + value, 0);
};

console.log(sumOfValues({ a: 1, b: 2, c: 3 }));
console.log(sumOfValues({ j: 9, i: 2, x: 3, z: 4 }));
console.log(sumOfValues({ w: 15, x: 22, y: 13 }));

// -------------------54.)-----------------------------------
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

const removeB = (obj: NumbersObject): NumbersObject => {
  const { b, ...restOfObj } = obj;

  return restOfObj;
};

console.log(removeB({ a: 1, b: 7, c: 3 }));
console.log(removeB({ b: 0, a: 7, d: 8 }));
console.log(removeB({ e: 6, f: 4, b: 5, a: 3 }));

// -------------------55.)-----------------------------------
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

const correctObjects = (
  obj1: NumbersObject,
  obj2: NumbersObject
): NumbersObject => {
  const { b, ...restOfObj2 } = obj2;

  return { ...obj1, ...restOfObj2, d: b };
};

console.log(correctObjects({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
console.log(correctObjects({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));

// -------------------56.)-----------------------------------
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

const multiplyNumbers = (a: NumbersObject, b: number): NumbersObject => {
  const result: NumbersObject = {};

  for (const key in a) {
    result[key] = a[key] * b;
  }

  return result;
};

console.log(multiplyNumbers({ a: 1, b: 2, c: 3 }, 3));
console.log(multiplyNumbers({ j: 9, i: 2, x: 3, z: 4 }, 10));
console.log(multiplyNumbers({ w: 15, x: 22, y: 13 }, 6));

// -------------------57.)-----------------------------------
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

const swapKeysAndValues = (obj: MixObject): MixObject => {
  const result: MixObject = {};

  for (const key in obj) {
    result[obj[key]] = key;
  }

  return result;
};

console.log(swapKeysAndValues({ z: "a", y: "b", x: "c", w: "d" }));
console.log(swapKeysAndValues({ 2: "a", 4: "b", 6: "c", 8: "d" }));
console.log(swapKeysAndValues({ a: 1, z: 24 }));

// -------------------58.)-----------------------------------
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

type DataObject = {
  [key: string]: string | null;
};

const replaceEmptyWithNull = (data: DataObject): DataObject => {
  const result: DataObject = {};

  Object.keys(data).forEach((key) => {
    result[key] = data[key]?.trim() !== "" ? data[key] : null;
  });

  return result;
};

console.log(replaceEmptyWithNull({ a: "a", b: "b", c: "" }));
console.log(replaceEmptyWithNull({ a: "", b: "b", c: " ", d: "d" }));
console.log(replaceEmptyWithNull({ a: "a", b: "b ", c: " ", d: "" }));

// -------------------59.)-----------------------------------
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

type PersonalData = {
  fn: string;
  ln: string;
  size?: number | string; // optional since not always present
  weight?: number | string; // optional since not always present
  [key: string]: any; // needed to allow any other properties for the PersonalData without type errors (e.g., email , age etc.)
};

const getPersonalInfo = (data: PersonalData): PersonalData => {
  let result: PersonalData = { fn: data.fn, ln: data.ln };

  if (data.size) {
    result.size = `${data.size}cm`;
  }

  if (data.weight) {
    result.weight = `${data.weight}kg`;
  }

  return result;
};

console.log(
  getPersonalInfo({ fn: "Lisa", ln: "Müller", age: 17, size: 175, weight: 67 })
);
console.log(
  getPersonalInfo({
    fn: "Martin",
    ln: "Harper",
    age: 26,
    email: "martin.harper@test.de",
    weight: 102,
  })
);
console.log(
  getPersonalInfo({
    fn: "Andrew",
    ln: "Harper",
    age: 81,
    size: 175,
    weight: 71,
  })
);
console.log(
  getPersonalInfo({
    fn: "Matthew",
    ln: "Müller",
    age: 19,
    email: "matthew@mueller.de",
  })
);

// -------------------60.)-----------------------------------
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array

type City = {
  city: string;
  country: string;
  continent?: string; // optional since not present first, added later
};

// Create a new object for each city and add the continent property to it
// Add the updated city object to the result array and at the end return a the result array which will contain all cities, their countries and continent

const addContinent = (cities: City[], continent: string): City[] => {
  const result: City[] = [];

  for (const city of cities) {
    const newCityInfo: City = {
      ...city,
      continent: continent,
    };

    result.push(newCityInfo);
  }

  return result;
};

console.log(
  addContinent(
    [
      { city: "Tokyo", country: "Japan" },
      { city: "Bangkok", country: "Thailand" },
    ],
    "Asia"
  )
);
console.log(
  addContinent(
    [
      { city: "Stockholm", country: "Sweden" },
      { city: "Paris", country: "France" },
    ],
    "Europe"
  )
);

// -------------------61.)-----------------------------------
// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

const countNumberOccurence = (numbers: number[]): { [key: number]: number } => {
  let numberObject: { [key: number]: number } = {};

  for (const number of numbers) {
    if (numberObject[number]) {
      numberObject[number] += 1;
    } else {
      numberObject[number] = 1;
    }
  }

  return numberObject;
};

console.log(countNumberOccurence([1, 2, 2, 3]));
console.log(countNumberOccurence([9, 9, 9, 99]));
console.log(countNumberOccurence([4, 3, 2, 1]));

// -------------------62.)-----------------------------------
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

// 'Date' is a built-in object in JS for time and date storage and has built-in functions for formatting and accessing the date, day, month, year, time etc.
const isSameDate = (firstDate: Date, secondDate: Date): boolean => {
  return firstDate.getTime() === secondDate.getTime();
};

// 'new Date' initializes a new Date object and passes the date/time as its parameter, setting the date and time.
console.log(
  isSameDate(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
);
console.log(
  isSameDate(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
);
console.log(
  isSameDate(new Date("2001/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
);

// -------------------63.)-----------------------------------
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

const countDaysBetween = (firstDate: Date, secondDate: Date): number => {
  const oneDayInMiliseconds = 1000 * 60 * 60 * 24;

  const timeBetween = secondDate.getTime() - firstDate.getTime();
  const daysBetween = Math.round(timeBetween / oneDayInMiliseconds);

  return Math.abs(daysBetween); // Math.abs used otherwise negative days returned if the second date is earlier than the first date
};

console.log(countDaysBetween(new Date("2020-06-11"), new Date("2020-06-01")));
console.log(countDaysBetween(new Date("2000-01-01"), new Date("2020-06-01")));

// -------------------64.)-----------------------------------
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

const isSameDay = (firstDate: Date, secondDate: Date): boolean => {
  return (
    firstDate.getDate() === secondDate.getDate() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getFullYear() === secondDate.getFullYear()
  );
};

// or the previous function isSameDate would work the same as it would check if the time stamp is the same for the provided dates
// and since exact time is not passed with the dates, getTime() should return the same time in miliseconds for dates which fall on the exact same day

console.log(isSameDay(new Date("2000/01/01"), new Date("2000/01/01")));
console.log(isSameDay(new Date("2000/01/01"), new Date("2000/01/02")));
console.log(isSameDay(new Date("2001/01/01"), new Date("2000/01/01")));
console.log(isSameDay(new Date("2000/11/01"), new Date("2000/01/01")));

console.log(isSameDate(new Date("2000/01/01"), new Date("2000/01/01")));
console.log(isSameDate(new Date("2000/01/01"), new Date("2000/01/02")));
console.log(isSameDate(new Date("2001/01/01"), new Date("2000/01/01")));
console.log(isSameDate(new Date("2000/11/01"), new Date("2000/01/01")));

// -------------------65.)-----------------------------------
// Write a function that takes two number arrays as parameters
// and return an array which contains elements from both
// arrays

const combineArrays = (numbers1: number[], numbers2: number[]): number[] => {
  return [...numbers1, ...numbers2];
};

console.log(combineArrays([1, 2], [3, 4]));
console.log(combineArrays([1, 2], [3, 4, 5, 6]));

// -------------------66.)-----------------------------------
// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the last element

const addElementAtEnd = (elements: string[], newElement: string): string[] => {
  return [...elements, newElement];
};

console.log(addElementAtEnd(["Apple", "Orange", "Banana"], "Kiwi"));

// -------------------67.)-----------------------------------
// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the first element

const addElementAtStart = (
  elements: string[],
  newElement: string
): string[] => {
  return [newElement, ...elements];
};

console.log(addElementAtStart(["Apple", "Orange", "Banana"], "Kiwi"));

// -------------------68.)-----------------------------------
// Write a function that takes two objects as parameters
// and return an object which contains properties from both
// objects

const mergeObjects = (
  object1: NumbersObject,
  object2: NumbersObject
): NumbersObject => {
  return { ...object1, ...object2 };
};

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4, e: 5, f: 6 }));

// -------------------69.)-----------------------------------
// Write a function that takes an object and a string as parameters
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string

type MyInfo = {
  [key: string]: string | number;
};

const addObjectProperty = (initialInfo: MyInfo, movie: string): MyInfo => {
  return { ...initialInfo, favoriteMovie: movie };
};

console.log(addObjectProperty({ eyeColor: "green", age: 10 }, "Garfield"));
console.log(addObjectProperty({ eyeColor: "blue", age: 15 }, "Twilight"));
