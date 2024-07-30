// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

// My Solution

// P - Parameters
// a positive integer number

// R - Return
// an array with all the power of 2 with the exponent ranging from 0 to the parameter

// E - Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

// P - Pseudocode
//make an empty array
// make a loop till n where i push the power of 2 for every digit
//return the array
function powersOfTwo(n){
    let result = [];
    for(let i = 0; i <= n; i++){
        result.push(Math.pow(2, i))
    }
    return result
}

console.log(powersOfTwo(4)) // [1, 2, 4, 8, 16]

