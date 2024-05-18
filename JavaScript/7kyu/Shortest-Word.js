// DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// My Solution

// P - Parameters
// a string containing words

// R - Returns
// the shortest word inside the string

// E - Examples
// findShort("bitcoin take over the world maybe who knows perhaps"), 3)


// P - Pseudocode
// use split to transform the string into an array then map the arrays with only the words lengths then sort in order to get the smallest number

function findShort(s){
    return s.split(' ').map((word) => word.length).sort((a, b) => a - b)[0]
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))