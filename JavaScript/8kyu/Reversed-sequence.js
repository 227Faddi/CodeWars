// DESCRIPTION:
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]


// My Solution

// P - Parameters
// a number > 0

// R - Return
// an array of integers from n to 1

// E - Examples
// n=5 --> [5,4,3,2,1]

// P - Pseudocode
// make a for loop
// push every num till 1 to a new arr

const reverseSeq = n => {
    let result = [];
    for(let i = 1; i <= n; i++){
        result.push(i)
    }
    return result.reverse()
}


console.log(reverseSeq(10))