// DESCRIPTION:
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// My Solution

// P - Parameters
// an integer number

// R - Return
// a string based on the parameter number. if greater or equal than 10  "Great, now move on to tricks" if less  "Keep at it until you get it"

// E - Examples
// hoopCount(11) => "Great, now move on to tricks"
// hoopCount(8) =>  "Keep at it until you get it"

// P - Pseudocode
// a conditional to check if the parameter number is equal or greater than 10

function hoopCount(n) {
    return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
}

console.log(hoopCount(11))