// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

// My Solution

// P - Parameters
// 2 integer numbers 1 representig the current position and the other the result of the dice

// R - Return
// a number representing the new position of the player, found by the result of the dice multiplied per 2

// E - Examples 
// move(3, 6) should equal 15

// P - Pseudocode
// return the position plus the roll multiplied per 2


function move (position, roll) {
    return position + (roll * 2)
}