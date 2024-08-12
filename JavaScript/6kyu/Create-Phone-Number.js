// DESCRIPTION:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// My Solution

// P - Parameters
// an array of 10 integer numbers from 0 to 9

// R - Return
// a string using the array numbers in a phone number format

// E - Examples 
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// createPhoneNumber([1, 5, 3, 4, 5, 6, 5, 8, 9, 0]) // => returns "(153) 456-5890"


// P - Pseudocode
// use join to transform the array into a string
// use slice to separate the numbers in base of the format
// add the right symbols
// return the string

function createPhoneNumber(numbers){
    let string = numbers.join('')
    let formatted = `(${string.slice(0, 3)}) ${string.slice(3, 6)}-${string.slice(6, 10)}`
    return formatted
}


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))