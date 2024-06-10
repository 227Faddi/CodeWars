// DESCRIPTION:
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// My Solution

// P - Parameters
// 2 string with letters from a to z
 
// R - Return
// a new sorted string using letters from the 2 parameters only once

// E - Examples
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// P - Pseudocode
// create an empty array
// loop in the 2 string and push the letter that are not present in the new array
// sort the new array
// return the new array into a string


function longest(s1, s2) {
    let result = [];
    s1Arr = s1.split('');
    s2Arr = s2.split('');

    s1Arr.map((letter) => result.includes(letter) ? false : result.push(letter))
    s2Arr.map((letter) => result.includes(letter) ? false : result.push(letter))

    return result.sort().join('')
}


console.log(longest("aretheyhere", "yestheyarehere")) // "aehrsty"