// Description:
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

// My Solution

// P - Parameters
// a string

// R - Return
// an array from the string with length of the every word in it

// E - Examples
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]

// P - Pseudocode
// transform the string into an array dividing it by every word
// use map to return a new array with the length of every word added to it

function addLength(str) {
    return str.split(' ').map((word) => `${word} ${word.length}`)
}
    
console.log(addLength('apple ban'))