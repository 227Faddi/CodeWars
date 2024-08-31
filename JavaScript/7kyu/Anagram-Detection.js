// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// My Solution

// P - Parameters
// 2 string represent 2 different words

// R - Return
// A boolean indicating whether the two strings are anagrams or not

// E - Examples
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"

// P - Pseudocode
// sanitize the strings by making them to lowercase
// transform the 2 string into array
// order them and check if they are equal
// return a boolean indicating the result

var isAnagram = function(test, original) {
    test = test.toLowerCase().split('').sort().join('')
    original = original.toLowerCase().split('').sort().join('')
    return test === original
};

console.log(isAnagram("dumble", "bumble")) //false
console.log(isAnagram("Twoo", "woot")) //true
