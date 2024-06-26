// DESCRIPTION:
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// My Solution

// P - Parameters
// Number, integer, positve.

// R - Returns
// return the number rearranged in a descending way to make the most higher number out of it

// E - Examples
// Input: 42145 Output: 54421


// P - Pseudocode
// transform the number into an string after an array, and use sort to sort it in a descending way and put it back into a number


function descendingOrder(n){
    return Number(String(n).split('').sort((a, b) => a - b).reverse().join(''))
}

console.log(descendingOrder(123456789))  //987654321
