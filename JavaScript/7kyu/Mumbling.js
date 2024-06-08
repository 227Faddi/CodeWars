// DESCRIPTION:
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// My Solution

// P - Parameters
// a string
 
// R - Return
// each letter in multiplied by its position in the string

// E - Examples
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

// P - Pseudocode
// split the string into an array and with map loop in every letter and return and array with the letter multiplied by their position

function accum(s) {
  return s.split('').map((num, index) =>num.toUpperCase() + num.toLowerCase().repeat(index)).join('-')
}

console.log(accum("abcd"))