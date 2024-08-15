// DESCRIPTION:
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

// My Solution

// P - Parameters
// 2 integers as string

// R - Return
// the sum of the two numbers as a string, if empty the value is 0

// E - Examples 
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"

// P - Pseudocode
// check if the one of the parameter is empty
// if is empty transform it into a 0
// then make the sum of the two string as numbers
// return the total as a string
function sumStr(a,b) {
    if(a.length === 0){
        a = '0'
    } else if(b.length === 0){
        b = '0'
    }
    let tot = Number(a) + Number(b)
    return String(tot)
}