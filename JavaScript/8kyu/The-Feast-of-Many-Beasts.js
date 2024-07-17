// DESCRIPTION:
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// My Solution

// P - Parameters
//  2 lowercase string of letters and may contain hyphens and spaces, one for the beast's name and one for the dish's name

// R - Return
// true or false to indicate whether the beast has the same the same start and end as the dish

// E - Examples 
// ("great blue heron", "garlic naan"), true)
// ("chickadee", "chocolate cake"), true)
// ("brown bear", "bear claw"), false)

// P - Pseudocode
// compare the first and last character of the first string with the second one


function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

console.log(feast("great blue heron", "garlic naan"))