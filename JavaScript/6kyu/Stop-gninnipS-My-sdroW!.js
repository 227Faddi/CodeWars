// DESCRIPTION:
// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

// My Solution

// P - Parameters
// a string of a single or multiple words

// R - Return
// the string with the words that has 5 or more letters reversed

// E - Examples
// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

// P - Pseudocode
// transform the string into an array for every word
// use map to loop into it
// check for words with length 5 or more
// if true use the transform the word into and array
// reverse it and return it back to a string
// return the array as a string

function spinWords(string){
    return string.split(' ').map((word) => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ')
}

console.log(spinWords("Hey fellow warriors")) //"Hey wollef sroirraw"