// DESCRIPTION:
// Task
// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

// You will need to figure out the rule of the series to complete this.

// Rules
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return "0.00".

// You will only be given Natural Numbers as arguments.

// Examples (Input --> Output)
// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// My Solution

// P - Parameters
// a number

// R - Return
// the sum of the first n terms of the sequence rounded to 2 decimal places as a string
// or 0.00 if the input is 0

// E - Examples
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// P - Pseudocode
// check for a 0 input
// use a for loop to sum all the numbers
// return the tot rounded by 2 decimal as a string


function SeriesSum(n) {
    if(n === 0){
        return '0.00' 
    }else if(n === 1){
        return '1.00' 
    }else{
        let tot = 1;
        let x = 1
        for(let i = 1; i < n; i++){
            tot += 1/(x += 3)
        }
        return String(tot.toFixed(2))
    }
}

console.log(SeriesSum(3)) //"1.39"