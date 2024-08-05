// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// My Solution

// P - Parameters
// a string

// R - Return
// the string replacing the errors with the actual letters

// E - Examples
// correct("L0ND0N"),"LONDON");
// correct("DUBL1N"),"DUBLIN");
// correct("51NGAP0RE"),"SINGAPORE");
// correct("BUDAPE5T"),"BUDAPEST");
// correct("PAR15"),"PARIS");

// P - Pseudocode
// make an obj with all the errors and the right values
// make the string into an array and loop into it to change the mistakes
// make the array back to a string and return it

function correct(string){
    let mistakes = {
        '5' : 'S',
        '0' : 'O',
        '1' : 'I'
    }
    return string.split('').map((letter) => mistakes[letter] ? mistakes[letter] : letter).join('')
}

console.log(correct("PAR15")) //"PARIS"