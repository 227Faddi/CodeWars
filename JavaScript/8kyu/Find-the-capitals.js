// Instructions
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

// My Solution

// P - Parameters
// a string

// R - Return
// an array of number representing the index of the uppercase character

// E - Examples 
// "CodEWaRs" --> [0,3,4,6]

// P - Pseudocode
// transform the word into an array
// 

var capitals = function (word) {
    let result = [];
    word.split('').map((char, index) =>{
        if(char === char.toUpperCase()){
            result.push(index)
        }
    })
    return result
};

console.log(capitals('CodEWaRs')) //[0,3,4,6]