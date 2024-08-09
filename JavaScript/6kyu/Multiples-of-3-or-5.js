// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// My Solution

// P - Parameters
// an integer number

// R - Return
// the sum of all the multiplies of 3 and 5.

// E - Examples
// 10 => 3 + 5 + 6 + 9 = 23

// P - Pseudocode
// make a for loop to 
// check the multiplies of 3 and 5
// push the multiplies into an array if not already there
// return the sum of the array

function solution(number){
    const multiples = new Set();

    for (let i = 3; i < number; i += 3) {
        multiples.add(i);
    }
    for (let i = 5; i < number; i += 5) {
        multiples.add(i);
    }
    return Array.from(multiples).reduce((acc, num) => acc + num, 0);
}

console.log(solution(10)) //23