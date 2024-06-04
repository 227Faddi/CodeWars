// DESCRIPTION:
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

// My Solution

// P - Parameters
// a string less than 1000
 
// R - Return
// the middle character of the string, if the length is even the 2 middle characters

// E - Examples
// getMiddle("middle") should return "dd"
// getMiddle("testing") should return "t"
// getMiddle("A") should return "A"

// P - Pseudocode
// check first for a str with single character then if it's odd or even, in base of that return the middle

function getMiddle(s){
    let middle = Math.floor(s.length / 2)
    return s.length % 2 === 0 ? s[(middle - 1)] + s[middle] : s[middle]
}

console.log(getMiddle("middle")) //should return "dd"
console.log(getMiddle("a")) 
console.log(getMiddle("testing"))
