// DESCRIPTION:
// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// My Solution

// P - Parameters
// a positive integer

// R - Return
// the sheep counted till that num

// E - Examples
// 3 =  "1 sheep...2 sheep...3 sheep..."

// P - Pseudocode
//use a loop to count till the parameter

var countSheep = function (num){
    let result = '';
    for(let i = 1; i <= num;  i++){
        result += `${i} sheep...`
    }
    return result
}

console.log(countSheep(10))