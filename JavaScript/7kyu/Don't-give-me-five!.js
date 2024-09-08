// Description:
// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

// My Solution

// P - Parameters
// 2 integer numbers

// R - Return
// the count of the numbers present between the 2 parameter and inclusive without 5 or numbers with 5

// E - Examples
// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

// P - Pseudocode
// use a for loop to count from the first to the second parameter
// if the number is not five or doesn't have 5 in it then push it to an empty array
// return the array length

function dontGiveMeFive(start, end){
    let result = [];
    for(let i = start; i <= end; i++){
        if(i !== 5 && !String(i).split('').includes('5')){
            result.push(i)
        }
    }
    console.log(result)
    return result.length;
}

console.log(dontGiveMeFive(4,17)) //12