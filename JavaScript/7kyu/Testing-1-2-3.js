// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// My Solution

// P - Parameters
// an array of strings

// R - Return
// the array with the each string numbered

// E - Examples
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// P - Pseudocode
// check for empty array
// use map to loop into the array
// return the index of the string + 1 and the string

var number=function(array){
    if(array.length === 0){
        return [];
    }
    return array.map((string, index) => `${index + 1}: ${string}`);
}