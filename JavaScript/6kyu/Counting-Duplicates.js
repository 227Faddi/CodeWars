// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// My Solution

// P - Parameters
// a string with letters, uppercase or lowercase
 
// R - Return
// how many letters appear more than 1 time

// E - Examples
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times

// P - Pseudocode
// use a set to put all the letters that appears multiple times then return the length of the set


function duplicateCount(text){
    text = text.toLowerCase()
    let unique = new Set();
    let result = new Set()
    text.split('').map((letter) => unique.has(letter) ? result.add(letter) : unique.add(letter))
    return result.size
}

console.log(duplicateCount('aabBcde'))