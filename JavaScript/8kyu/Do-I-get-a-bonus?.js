// DESCRIPTION:
// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).

// My Solution

// P - Parameters
//  an integer number with a boolean

// R - Return
// a string with the pound sign and the number * 10 if the boolean is true or just the number if the boolean is false

// E - Examples
// (bonusTime(10000, true), '£100000');
// (bonusTime(25000, true), '£250000');
// (bonusTime(10000, false), '£10000');
// (bonusTime(60000, false), '£60000');

// P - Pseudocode
// make a conditional to check for bonus
// if true return the salary * 10 as a string with \u00A3
// if false just the salary as a string with '\u00A3

function bonusTime(salary, bonus) {
    return bonus === true ? `\u00A3${salary * 10}`: `\u00A3${salary}`;
}

console.log(bonusTime(25000, true)) //250000