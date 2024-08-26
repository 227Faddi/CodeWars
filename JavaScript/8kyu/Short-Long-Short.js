// DESCRIPTION:
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"
// ShortLongShort.solution("1", "22"); // returns "1221"
// ShortLongShort.solution("22", "1"); // returns "1221"

// My Solution

// P - Parameters
// 2 string

// R - Return
// a string formed by the short string, long string short string

// E - Examples
// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

// P - Pseudocode
// check for empty strings
// use a conditional to check the longest and shortest
// return a new string with the format short, long, short

function solution(a, b){
    return a.length > b.length ? b + a + b : a + b + a;
}

console.log(solution('13', '200'))//'1320013'