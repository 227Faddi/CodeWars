DESCRIPTION:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// My Solution

// P - Parameters
// 2 strings
 
// R - Return
// true or false if the 1st string ends with the 2nd string

// E - Examples
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// P - Pseudocode
// check the length of the ending string and compare it with the same ending of the string

function solution(str, ending){
    return str.endsWith(ending) 
}

console.log(solution('abc', 'd'));
console.log(solution('abc', 'bc'));

