// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.


// an array of string
// it can an empty or null
// the array with the rotten fruit replaced
[]


function removeRotten(bagOfFruits){
    if(!bagOfFruits || bagOfFruits.length === 0){
        return []
    }
    return bagOfFruits.map((fruit) => fruit.startsWith('rotten') ? fruit.replace('rotten', '').toLowerCase() : fruit)
}

console.log(removeRotten(['apple', 'rottenBanana', 'apple'])) // ['apple', banana, 'apple']
console.log(removeRotten([])) // ['apple', banana, 'apple']
console.log(removeRotten(null)) // ['apple', banana, 'apple']
