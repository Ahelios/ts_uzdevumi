import $ from 'jquery';
import sum from './utils/sum/sum';

console.log('Ready for coding');

console.log('Body jQuery node:', $('body'));
console.log('Body javascript node:', document.querySelector('body'));
console.log('2 + 3 =', sum(2, 3));

// -------------------1.)-----------------------------------
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

const subtract = (a:number, b:number): number => a - b;

console.log(subtract(1, 2));
console.log(subtract(10, 5));
console.log(subtract(99, 1));

// -------------------2.)-----------------------------------
// Write a function that takes a value as argument
// Return the type of the value

const checkType = (a:any): any => typeof (a);

console.log(checkType(1));
console.log(checkType(false));
console.log(checkType({}));
console.log(checkType(null));
console.log(checkType('string'))
console.log(checkType(['array']));

// -------------------3.)-----------------------------------
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const totalEquality = (a: any, b: any): any => a === b;

console.log(totalEquality(2, 3));
console.log(totalEquality(3, 3));
console.log(totalEquality(1, '1'));
console.log(totalEquality('10', '10'));

// -------------------4.)-----------------------------------
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

const returnStringChar = (a:string, n: number):string=> a[n];

console.log(returnStringChar('abcd', 1));
console.log(returnStringChar('zyxbwpl',5));
console.log(returnStringChar('gfedcba',3));

// -------------------5.)-----------------------------------
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

const returnWithoutThree = (a:string): string => a.substring(3);

console.log(returnWithoutThree('abcdefg'));
console.log(returnWithoutThree('1234'));
console.log(returnWithoutThree('fgedcba'));

// -------------------6.)-----------------------------------
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

const returnLastThree = (a:string): string => a.substring(a.length - 3);

console.log(returnLastThree('abcdefg'));
console.log(returnLastThree('1234'));
console.log(returnLastThree('fgedcba'));

// -------------------7.)-----------------------------------
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

const returnFirstThree = (a:string): string => a.substring(0, 3);

console.log(returnFirstThree('abcdefg'));
console.log(returnFirstThree('1234'));
console.log(returnFirstThree('fgedcba'));

// -------------------8.)-----------------------------------
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

const returnFirstHalf = (a:string): string => a.slice(0, Math.floor((a.length / 2)));

console.log(returnFirstHalf('abcdefgh'));
console.log(returnFirstHalf('1234'));
console.log(returnFirstHalf('gedcba'));

// -------------------9.)-----------------------------------
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

const returnExceptFirstThree = (a:string): string => a.slice(0, -3);

console.log(returnExceptFirstThree('abcdefg'));
console.log(returnExceptFirstThree('1234'));
console.log(returnExceptFirstThree('fgedcba'));

// -------------------10.)-----------------------------------
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

const returnPercentage = (a: number, b: number): number => ((b / 100) * a);

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
  f: number,
): number => ((((a + b) - c) * d) / e) ** f;

console.log(returnArithmeticCal(6, 5, 4, 3, 2, 1));
console.log(returnArithmeticCal(6, 2, 1, 4, 2, 3));
console.log(returnArithmeticCal(2, 3, 6, 4, 2, 3));

// -------------------11.)-----------------------------------
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
