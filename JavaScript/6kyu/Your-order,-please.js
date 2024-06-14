// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// My Solution

// P - Parameters
// a string 

// R - Return
// the string sortred in base of the number of each word in the string

// E - Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// P - Pseudocode
// split the string into an array
// check for the number in the word
// sort the array based on the number
// join the array back to a string

function order(words){
    if(!words){
        return words
    }
    function getNumber(str){
        return str.match(/\d/)[0]
    }
    return words.split(' ').sort((a,b) => getNumber(a) - getNumber(b)).join(' ')
}

console.log(order("is2 Thi1s T4est 3a")) //"Thi1s is2 3a T4est"