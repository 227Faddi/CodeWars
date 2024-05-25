// DESCRIPTION:
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// My Solution

// P - Parameters
// an array of integers numbers

// R - Return
// the number that appears an odd number of time (it's always going to be one)

// E - Examples
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).

// P - Pseudocode
// loop into the array and count the apparence of every element then check if is odd or even

function findOdd(A) {
    for(let i = 0; i < A.length; i++){
        let appearance = A.filter((item) => item === A[i]).length
        if(appearance % 2 !== 0){
          return Number(A[i])
        }
    }
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])) //4