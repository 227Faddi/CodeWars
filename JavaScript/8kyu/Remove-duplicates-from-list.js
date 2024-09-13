// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

// My Solution

// P - Parameters
// an array of numbers

// R - Return
// a new array with only unique numbers

// E - Examples
// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

// P - Pseudocode
// make an empty array
// use map to check which numbers are not present inside the new array
// push the unique number
// return the array

function distinct(a) {
    let result = [];
    a.map(num =>{
        if(!result.includes(num)){
            result.push(num)
        }
    })
    return result;
}