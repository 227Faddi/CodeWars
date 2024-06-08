// DESCRIPTION:
// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// My Solution

// P - Parameters
// 2 positive number greater than 0
 
// R - Return
// an array containing the first number multiplied by the second

// E - Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// P - Pseudocode
// create an array then use a loop to multiply the first num and then push it into the array


function countBy(x, n) {
    let result = [];
    for(let i = 1; i <= n; i++){
        result.push(x * i)
    }
    return result
}