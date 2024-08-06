// DESCRIPTION:
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// My Solution

// P - Parameters
// an array of strings

// R - Return
// return the first string after sorting the array alphabetically with *** between each letter

// E - Examples
// ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"] => 'b***i***t***c***o***i***n' 

// P - Pseudocode
// check for empty array
// sort the array
// take the first string
// return the string with the *** between each letter

function twoSort(s) {
    if(s.length === 0){
        return [];
    }
    return s.sort()[0].split('').join('***')
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])) //'b***i***t***c***o***i***n' 