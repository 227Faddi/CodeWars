// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// Note: if this seems too simple for you try the next level

// Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays... 😕

// My Solution

// P - Parameters
// an array of values

// R - Return
// a string with each value separated by a comma

// E - Examples
// ["h","o","l","a"] => // "h,o,l,a"

// P - Pseudocode
// use join methods to turn the array into a string
// and use a comma as a parameter

function printArray(array){
    return array.join(',')
}