// Description:
// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.

// My Solution

// P - Parameters
// 1 strings representing the animal encountered

// R - Return
// a string with 'small' if the parameter is a 'alligator' and 'wide' for any other string 

// E - Examples
// dog => wide
// AlliGator => small

// P - Pseudocode
// compare the parameter in lowercase to 'alligator
// if it's equal then return small
// if not return wide


function mouthSize(animal) {
    return animal.toLowerCase() === 'alligator' ? 'small' : 'wide'
}


console.log(mouthSize("ant bear")) // wide
console.log(mouthSize("alligator")) // small