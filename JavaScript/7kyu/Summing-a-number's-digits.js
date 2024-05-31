// DESCRIPTION:
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.


// My Solution

// P - Parameters
// an integer number

// R - Return
// the sum of every digit from the number

// E - Examples
// 10 --> 1
// 99 --> 18
// -32 --> 5

// P - Pseudocode
// transform the number to absolute number in case of negative and make an array from it, then sum the digit from the num with reduce

function sumDigits(number) {
    let num = Math.abs(number)
    return Number(String(num).split('').reduce((tot, num) => tot += Number(num), 0))
}

console.log(sumDigits(99)) // 18