// DESCRIPTION:
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// My Solution

// P - Parameters
// a string

// R - Return
// an object with every character counted

// E - Examples 
// 'aba' => {'a': 2, 'b': 1}
// 'anna' => {'a': 2, 'n': 2}

// P - Pseudocode
// check for empty parameter
// turn the string into an array
// use reduce to loop into the array and, use an empty obj as a accumulator
// if the character is present in the obj increase the value of it, if not then add it to it
// return the accumulator obj

function count(string) {
    if(!string){
        return {};
    }
    return string.split('').reduce((acc, char) =>{
        acc[char] ? acc[char] += 1 : acc[char] = 1;
        return acc
    }, {})
}

console.log(count('aba')) //{'a': 2, 'b': 1}