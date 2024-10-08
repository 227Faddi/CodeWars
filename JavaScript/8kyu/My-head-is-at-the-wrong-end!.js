// Description:
// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!

// My Solution

// P - Parameters
// an array of strings

// R - Return
// the array reversed

// E - Examples
// fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]
// fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]
// fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]

// P - Pseudocode
// return the array after using the reverse method

function fixTheMeerkat(arr) {
    return arr.reverse()
}

console.log(fixTheMeerkat(["bottom", "middle", "top"]))