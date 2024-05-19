// DESCRIPTION:
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// My Solution

// P - Parameters
// a string with numbers or letters


// R - Returns
// if the string is formed by 4 number and 6 number return true if not false

// E - Examples
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// P - Pseudocode
// check first the length of the string if it's 4 or 6, then if it is continue and transform the string into an array to check if every component of the string is a number, if yes return true

function validatePIN (pin) {
    if(pin.length === 4 || pin.length === 6){
        return pin.split('').every((element) => !isNaN(parseFloat(element)))
    } else{
        return false
    }
}

console.log(validatePIN("a234"))
console.log(validatePIN("1234"))
