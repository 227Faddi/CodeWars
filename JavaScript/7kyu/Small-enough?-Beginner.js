// DESCRIPTION:
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// My Solution

// P - Parameters
// an array of numbers, and a number

// R - Return
// true if all the number in the array are below the number set as a parameter

// E - Examples
// ([66, 101], 200) true
// ([78, 117, 110, 99, 104, 117, 107, 115], 100) false
// ([101, 45, 75, 105, 99, 107], 107) true

// P - Pseudocode
// loop into the array and check if the values are below the limit number then return a boolean


function smallEnough(a, limit){
    return a.every(num => num <= limit)
}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)) //false