// DESCRIPTION:
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

// My Solution

// P - Parameters
// a string

// R - Return
// the string with all the character replated into a # besides the last 4 character

// E - Examples 
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// P - Pseudocode
// check if the string has more then 4 character
// slice and have just the 4 character
// count the total character minus 4
// make a loop to replace the string length minus 4 into #
// return the string with # + the 4 last digits

function maskify(cc) {
    if(cc.length <= 4){
        return cc
    } else{
        let lastFour = cc.slice(-4);
        let hashString = '';
        for(let i = 1; i <= cc.length - 4; i++){
            hashString += '#'
        }
        return hashString + lastFour
    }
}

console.log(maskify('4556364607935616')) //'############5616'