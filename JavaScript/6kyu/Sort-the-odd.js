// DESCRIPTION:
// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// My Solution

// P - Parameters
// An array of numbers

// R - Return
// the array with only the odd number sorted leaving the even numbers in the original position

// E - Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// P - Pseudocode
//filter the array and target the odd numbers
//sort the odd numbers
//replace the odd numbers with the sorted numbers
//return the array


function sortArray(array) {
    let odd = array.filter((num) => num % 2 !== 0).sort();
    let index = 0;
    return array.map((num) => num % 2 !== 0 ? odd[index++] : num)
}

console.log(sortArray([5, 3, 2, 8, 1, 4]))  //[1, 3, 2, 8, 5, 4]