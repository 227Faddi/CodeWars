// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"

// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// My Solution

// P - Parameters
// a string with numbers separated by space

// R - Returns
// a string with first the higher number and after a space the lower number

// E - Examples
// highAndLow("1 2 3 4 5");  // return "5 1"

// P - Pseudocode
// transform the string into a array, find the min and max, transform the array back to a string with an space

function highAndLow(numbers){
    let arr = numbers.split(' ').sort((a, b) => a - b);
    return `${arr[arr.length - 1]} ${arr[0]}`
}

console.log(highAndLow("5 2 3 1 4"))  // return "5 1"
