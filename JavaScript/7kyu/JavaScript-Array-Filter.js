// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

// My Solution

// P - Parameters
// an array of numbers

// R - Return
// the array with only even numbers

// E - Examples
// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

// P - Pseudocode
// use the filter methos to check if the num % 2 is equal to 0
// return the new array

function getEvenNumbers(numbersArray){
    return numbersArray.filter(num => num % 2 === 0)
}