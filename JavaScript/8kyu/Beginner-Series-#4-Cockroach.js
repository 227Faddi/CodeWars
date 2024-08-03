// DESCRIPTION:
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30 
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

// My Solution

// P - Parameters
// a number

// R - Return
// the number converted in cm per second rounded down to an integer

// E - Examples
// 1.08 --> 30 

// P - Pseudocode
// convert the number from km/h to cm/s
//return the number with math.floor


function cockroachSpeed(s) {
    return Math.floor(s * 27.7778)
}

console.log(cockroachSpeed(1.09)) //30