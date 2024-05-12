// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]


// My solution

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
// array of strings, sort them by their length, shortest to longest
//P: Array, with multiple strings, all with different lengths.
//R return the array sorted by length.
//E: 

function sortByLength (array) {
    //take the array and sort it using a conditional to sort it by length
    return array.sort((a, b) => a.length - b.length);
}

//should return sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]) //["Eyes", "Glasses", "Monocles", "Telescopes"]
