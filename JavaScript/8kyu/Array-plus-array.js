// DESCRIPTION:
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// My Solution

// P - Parameters
// two arrays of integer numbers

// R - Return
// the sum of every element in the two arrays

// E - Examples 
// [1, 2, 3], [4, 5, 6] => 21
// [-1, -2, -3], [-4, -5, -6] => -21

// P - Pseudocode
// use the reduce method to sum every element of the array and return the sum of both

function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((acc, num) => acc += num, 0) + arr2.reduce((acc, num) => acc += num, 0);
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))