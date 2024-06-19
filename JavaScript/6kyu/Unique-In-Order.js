// DESCRIPTION:
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// My Solution

// P - Parameters
// a string or array

// R - Return
// an array of the parameter with only unique values in the original order

// E - Examples
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// P - Pseudocode
// create a new array
// push the unique values to the array
// return the array with unique values

var uniqueInOrder=function(iterable){
    let result = [];
    if(!Array.isArray(iterable)){
        iterable.split('').map((el, index) => el === iterable[index + 1] ? null : result.push(el))
        return result
    } 
    iterable.map((el, index) => el === iterable[index + 1] ? null : result.push(el))
    return result
}

console.log(uniqueInOrder([1,2,2,3,3])) //[[1,2,3]
