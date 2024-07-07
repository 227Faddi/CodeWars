// DESCRIPTION:
// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// My Solution

// P - Parameters
// A string of lowercase latin letters, digits and symbols.

// R - Return
// the string reversed with only alphabetic character

// E - Examples
// (reverseLetter("krishan"),"nahsirk")
// (reverseLetter("ultr53o?n"),"nortlu")

// P - Pseudocode
//filter the string and remove all the non-alphabetical character
// return the reversed string


function reverseLetter(str) {    
    let filtered = str.split('').filter((letter) => letter.match(/[a-z]/i));
    return filtered.reverse().join('')
}

console.log(reverseLetter('ultr53o?n')) //nortlu