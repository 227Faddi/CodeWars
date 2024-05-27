// DESCRIPTION:
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// My Solution

// P - Parameters
// a string

// R - Return
// the string without any exclamation marks

// E - Examples
// 'hey!' => 'hey'

// P - Pseudocode
// use split to transform the string into an array then map or filter the array then join to get back to a string

function removeExclamationMarks(s) {
    return s.split('').filter((item) => item !== '!').join('');
}

console.log(removeExclamationMarks('hey!!'))