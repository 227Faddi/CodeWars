// DESCRIPTION:
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

// My Solution

// P - Parameters
// a string with the current state of the traffic light

// R - Return
// a string with the next state of the traffic light

// E - Examples
// yellow => red
// red => green

// P - Pseudocode
// use a conditional and return the next state

function updateLight(current) {
    let curr = current.toLowerCase();
    if(curr === 'green'){
        return 'yellow'
    } else if(curr === 'yellow'){
        return 'red'
    } else if(curr === 'red'){
        return 'green'
    }
}
