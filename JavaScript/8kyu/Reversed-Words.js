// Description:
// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// My Solution

// P - Parameters
// a string

// R - Return
// the string reversed

// E - Examples 
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// P - Pseudocode
// use split to make an array 
// reverse it and return a string

function reverseWords(str){
    return str.split(' ').reverse('').join(' ');
}

console.log(reverseWords("hello world!"))