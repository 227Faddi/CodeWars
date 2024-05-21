// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// My Solution

// P - Parameters
// a simple string that can contain any character

// R - Return
// a boolean: true if the string don't contain 'x' or 'o' and if there is the same num of them and false if not

// E - Examples
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true

// P - Pseudocode
// check for no apperance of 'x' or 'o', transform the string into an arr, then using .filter, filter the item to count and .length to know the num, then compare the two

function XO(str) {
    let string = str.toLowerCase().split('')
    if(!string.includes('x') && !string.includes('o')){
        return true
    } else{
        return string.filter(item => item === 'x').length === string.filter(item => item === 'o').length
    }
}


console.log(XO("zzoo"))  //false