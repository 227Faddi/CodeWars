// DESCRIPTION:
// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcissistic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

// This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

// My Solution

// P - Parameters
// a positive number in base 10

// R - Return
// a boolean that represent if the number is a narcissistic number or not

// E - Examples 
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 // true
// 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938 // false

// P - Pseudocode
// put the length of the number into a variable
// take each digit and raise them to the power of the number length
// sum all the results
// check if the result is equal to the original number


function narcissistic(value) {
    let length = String(value).length
    let result = String(value).split('').reduce((acc, num) => acc + (Number(num) ** length), 0)
    return result === value;
}
  
console.log(narcissistic(153)) //true