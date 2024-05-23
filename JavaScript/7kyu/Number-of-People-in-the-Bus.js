// DESCRIPTION:
// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

// My Solution

// P - Parameters
// an array containing multiple arrays with 2 integer number

// R - Return
// the difference of all the first values inside the arrays with the second

// E - Examples
// number([[10,0],[3,5],[5,8]])  // 5

// P - Pseudocode
// use reduce to sum all the first values together, do the same the second values and then do the differences

var number = function(busStops){
    let inside = busStops.reduce((tot, arr) => arr[0] + tot, 0)
    let outside = busStops.reduce((tot, arr) => arr[1] + tot, 0)
    return inside - outside
}

console.log(number([[10,0],[3,5],[5,8]]))  // 5