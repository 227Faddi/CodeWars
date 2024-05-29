// DESCRIPTION:
// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// My Solution

// P - Parameters
// an array with numbers

// R - Return
// even or odd in base of the sum of the numbers

// E - Examples
// Input: [0, -1, -5]
// Output: "even"

// P - Pseudocode
// check for empty arr, then sum the num in the arr and check if it's even or odd

function oddOrEven(array) {
    if(array.length === 0){
        return 'even';
    } else{
        return array.reduce((tot, num) => tot += num) % 2 === 0 ? 'even' : 'odd';
    }
}
