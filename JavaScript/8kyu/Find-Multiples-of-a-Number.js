// DESCRIPTION:
// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// My Solution

// P - Parameters
// 2 integer numbers greater than 0
// R - Return
// return an array with all the multiple between the first num and the second num

// E - Examples
// findMultiples(5, 25), [5, 10, 15, 20, 25]
// findMultiples(1, 2), [1, 2]
// findMultiples(5, 7), [5]

// P - Pseudocode
// make an empty array
// make a for loop until the limit
// multiply the integer by itself until it reaches the limit
// push every multiply inside the array

function findMultiples(integer, limit) {
    let result = [];
    for(let i = integer; i <= limit; i += integer){
        result.push(i)
    }
    return result;
}
  

console.log(findMultiples(5, 25))