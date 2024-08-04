// DESCRIPTION:
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

// My Solution

// P - Parameters
// 2 numbers

// R - Return
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// E - Examples
// 6, 10 --> 32
// 3, 3 --> 9

// P - Pseudocode
// check if it's a square by comparing the 2 parameters
// if it's a square then return the parameters multiplied by each others
// else return the parameters doubled and summed together

const areaOrPerimeter = function(l , w) {
    return l === w ? l * w : (l * 2) + (w * 2);
};