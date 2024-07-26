// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// My Solution

// P - Parameters
// an array

// R - Return
// the array without every second element 

// E - Examples
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// P - Pseudocode
// use filter to return only the values with even index to always remove the second value

function removeEveryOther(arr){
    return arr.filter((el, index) => index % 2 === 0)
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) //[1, 3, 5, 7, 9]