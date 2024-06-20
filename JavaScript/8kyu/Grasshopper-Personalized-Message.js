// DESCRIPTION:
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

// My Solution

// P - Parameters
// 2 strings

// R - Return
// if the 2 parameter are the same return 'hello boss' if not 'hello guest'

// E - Examples
// greet('Daniel', 'Daniel'), 'Hello boss')
// greet('Greg', 'Daniel'), 'Hello guest')

// P - Pseudocode
// make a conditional
// if the 2 parameters are equal then return 'hello boss'
// else return 'hello guest'

function greet (name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest'
}


console.log(greet('Daniel', 'Daniel'))