// DESCRIPTION:
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// My Solution

// P - Parameters
// an array of integers numbers

// R - Return
// the single different number inside the array

// E - Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// P - Pseudocode
// sort the array by comparing the numbers
// return the first element or last as a number


function stray(numbers) {
    numbers.sort((a, b) => a - b)
    return numbers[0] != numbers[1] ? numbers[0] : numbers[numbers.length - 1]
}

console.log(stray([2, 1, 1])) //2