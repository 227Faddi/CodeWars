// DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


// My Solution

// P - Parameters
// a string

// R - Returns
// the string with each word reversed and with the same spaces

// E - Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// P - Pseudocode
// transform the string into an array then the words too and reverse the single words and the the string and at the end transform everything it back to string

function reverseWords(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

