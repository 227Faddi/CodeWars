// DESCRIPTION:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// My Solution

// P - Parameters
// a string

// R - Return
// each character of the string repeated once

// E - Examples
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// P - Pseudocode
// tranform the string into an array
// loop in each character using map
// return the character doubled
// use join to transform the array back to a string

function doubleChar(str) {
    return str.split('').map((el) => el += el).join('')
}
  

console.log(doubleChar("illuminati"))