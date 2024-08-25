// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// My Solution

// P - Parameters
// an array of strings

// R - Return
// a string in base of the number of 'good' present in the array

// E - Examples 
// well(['bad', 'bad', 'bad']), 'Fail!'
// well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!'
// well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!'

// P - Pseudocode
// filter the array to check how many 'good' are present inside the array, then check for the length
// make conditionals to return the right string

function well(x){
    if(!x.includes('good')){
        return 'Fail!'
    }
    let count = x.filter(str => str === 'good').length
    return count <= 2 ? 'Publish!' : 'I smell a series!';
}