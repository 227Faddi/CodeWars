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
// split the string then loop into the array to check if there is any o and x then count them and if there is the same num return true

function XO(str) {
    let string = str.toLowerCase()
    let countX = 0;
    let countO = 0;
    if(!string.includes('x') && !string.includes('o')){
        return true
    } else if(string.includes('x') && string.includes('o')){
        for(let i = 0; i < string.length; i++){
            
        }
    }else{
        return false
    }
}


console.log(XO("xooxx"))  //false