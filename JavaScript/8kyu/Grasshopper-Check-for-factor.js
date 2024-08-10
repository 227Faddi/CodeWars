// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

// My Solution

// P - Parameters
// 2 numbers 1 non negative that represent the base and a positive one that is the factor.

// R - Return
// a boolean based on the fact on whatever the factor is a true factor or no

// E - Examples 
// 3 % 6 => true
// 81 % 9 => true
// 14 % 3 => false

// P - Pseudocode
// return a conditional to check if the base % the factor is equal to 0 

function checkForFactor (base, factor) {
    return base % factor === 0;
}