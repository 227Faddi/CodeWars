// Description:
// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

// My Solution

// P - Parameters
// 

// R - Return
// a string formed by the short string, long string short string

// E - Examples
// "john McClane" --> "McClane john"

// P - Pseudocode
// make the string an array
// an return a new string formed by the array index 1 and index 0

function nameShuffler(str){
    let arr = str.split(' ')
    return `${arr[1]} ${arr[0]}`
}