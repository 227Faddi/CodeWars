// Description:
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// My Solution

// P - Parameters
// a string

// R - Return
// the string without the vowels

// E - Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

// P - Pseudocode
// create an obj with all the vowels
// transform the string into an array with split()
// filter the array using the vowels obj
// return a string without the vowels

function shortcut (string) {
    const vowels = {
        a: 'a',
        e: 'e',
        i: 'i',
        o: 'o',
        u: 'u'
    }
    return string.split('').filter((num) => num != vowels[num]).join('');
}

console.log(shortcut('how are you today?')) // hw r y tdy?