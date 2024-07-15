// DESCRIPTION:
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// My Solution

// P - Parameters
// a string

// R - Return
// a boolean indicating whatever the string is pangram or not 

// E - Examples 
// "The quick brown fox jumps over the lazy dog" => true

// P - Pseudocode
// create a new set
// make the string to lowercase
// loop the string and add every letter from a to z to the set
// check if the set has 26 letters




function isPangram(string){
    let letterSet = new Set();
    let lowerCase = string.toLowerCase();
    for(let letter of lowerCase){
        if(letter >= 'a' && letter <= 'z'){
            letterSet.add(letter)
        }
    }

    return letterSet.size == 26;
}   


console.log(isPangram("The quick brown fox jumps over the lazy dog."))