// Description:
// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

// My Solution

// P - Parameters
// a positive integer number

// R - Return
// a string formed by 1's and 0's alternate in base of the number used as a parameter

// E - Examples
// a string with size 6 should return :'101010'.
// with size 4 should return : '1010'.
// with size 12 should return : '101010101010'.

// P - Pseudocode


function stringy(size) {
    let result = '';
    for(let i = 1; i <= size; i++){
        if(result[result.length - 1] === '1'){
            result += '0'
        } else{
            result += '1'
        }
    }
    return result
}

console.log(stringy(12))