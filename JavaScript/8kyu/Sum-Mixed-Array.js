// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// My Solution

// P - Parameters
// an array with strings and number as value

// R - Return
// the sum of the array values as if all were numbers

// E - Examples
// sumMix([9, 3, '7', '3']) //22
// sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]) //42
// sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']) //41

// P - Pseudocode
// use reduce to loop into the array and after transform every  value in number sum it

function sumMix(x){
    return x.reduce((tot, value) => tot += Number(value), 0)
}

console.log(sumMix([9, 3, '7', '3'])) //22