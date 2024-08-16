// DESCRIPTION:
// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", 'o')  =>  1
// ("Hello", 'l')  =>  2
// ("", 'z')       =>  0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1

// My Solution

// P - Parameters
// 2 strings, where the second one is a single character

// R - Return
// the number of appearance of the second argument inside the first one

// E - Examples 
// ("Hello", 'o')  =>  1
// ("Hello", 'l')  =>  2
// ("", 'z')       =>  0

// P - Pseudocode
// check if the first string contain the second one
// if no return 0
// then transform the string into an array an use .filter to loop into it
// filter in base of equality with the second parameter
// return the length of the array

function strCount(str, letter){ 
    if(!str.includes(letter)){
        return 0
    }
    return str.split('').filter((char) => char === letter).length
}

console.log(strCount('Hello', 'o')) //1