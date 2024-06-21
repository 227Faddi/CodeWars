// DESCRIPTION:
// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// My Solution

// P - Parameters
// an array of values

// R - Return
// the sum of the array values without the lowest and highest value

// E - Examples
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// P - Pseudocode
// check for empty parameters
// use reduce to sum all the values
//use Math.min() and max for the highest a lowest
// return the total minus the highest and lowest

function sumArray(array) {
    if(array === null || !Array.isArray(array) || array.length < 2){
        return 0
    }
    let tot = array.reduce((tot, num) => tot += num, 0)
    return tot - (Math.min(...array) + Math.max(...array))
}
console.log(sumArray([ ]))
