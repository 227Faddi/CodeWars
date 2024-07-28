// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

// Examples ( Input --> Output )
// 121 --> 144
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square

// My Solution

// P - Parameters
// a number or empty value

// R - Return
// the next perfect square after the parameter number if it's a perfect square too, if not return -1

// E - Examples
// 121 --> 144
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square

// P - Pseudocode
//check for empty values or not perfect square numbers
//find the next one using a loop that increment the parameter until it finds another perfect square
//return the next perfect square

function findNextSquare(sq) {
    if(!sq || !Number.isInteger(Math.sqrt(sq))){
        return -1;
    } else{
        sq += 1;
        while(!Number.isInteger(Math.sqrt(sq))){
            sq++
        }
        return sq
    }
}

console.log(findNextSquare(625)) //676
console.log(findNextSquare(114)) //-1
