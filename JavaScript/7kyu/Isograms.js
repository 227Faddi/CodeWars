// DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// My Solution

// P - Parameters
// a string
 
// R - Return
// false if the string contains repeating letters true if not (no matter the letter case)

// E - Examples
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// P - Pseudocode
// loop in every letter an transform it to lowercase then check if it appears other time in the string

function isIsogram(str){
    let unique = new Set()
    str = str.toLowerCase();
    let check =  str.split('').filter((letter) => unique.has(letter) ? false :  unique.add(letter))
    return check.length === str.length
}

console.log(isIsogram('aba'))