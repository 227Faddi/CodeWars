// Create a function to lowercase all strings in an array. Non-string items should remain unchanged.

// Example
// arrayLowerCase(['Red', 'Green']) == ['red', 'green']
// arrayLowerCase([1, 'Green']) == [1, 'green']

function arrayLowerCase(arr){
    return arr.map((value) => typeof value === 'string' ? value.toLowerCase() : value)
}

console.log(arrayLowerCase([1, 'hey', true, 'ASDFSDFH', 45, 'HfY'])) // [ 1, 'hey', true, 'asdfsdfh', 45, 'hfy' ]