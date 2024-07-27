// DESCRIPTION:
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

// My Solution

// P - Parameters
// an array 

// R - Return
// the amount of valid smiles inside the array

// E - Examples
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// P - Pseudocode
// check for empty array and return 0 if it's empty
//create a count variable
// check every element of the array to see if it's a valid smile, if yes augment the count
//return the count

function countSmileys(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let count = 0;
    arr.forEach((el) => {
        if (((el.includes(':') || el.includes(';')) && (el.includes(')') || el.includes('D'))) &&
            (el.length === 2 || (el.length === 3 && (el.includes('-') || el.includes('~'))))) {
            count++;
        }
    });
    return count;
}

console.log(countSmileys([':D',':~)',';~D',':)'])) //4