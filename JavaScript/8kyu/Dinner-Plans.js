// Two samurai generals are discussing dinner plans after a battle, but they can't seem to agree.
// The discussion gets heated and you are cannot risk favoring either of them as this might damage your political standing with either of the two clans the samurai generals belong to. Thus, the only thing left to do is find what the common ground of what they are saying is.

// Compare the proposals with the following function:

// function commonGround(s1, s2)
// The parameters s1 and s2 are the strings representing what each of the generals said. You should output a string containing the words in s1 that also occur in s2.

// Each word in the resulting string shall occur once, and the order of the words need to follow the order of the first occurence of each word in s2.

// If they are saying nothing in common, kill both samurai and blame a ninja. (output "death")

// My Solution

// P 2 strings of words to compare with each other
// the words present in both string

// if the  strings don't have any word in common return death

// take each word of the first string and check if it's present on the second one 
// if yes i gotta put that word in a new string 
// then return the new string
// if the new string is empty return death

function commonGround(s1, s2){
    let result = [];
    s1.split(' ').map((word) => s2.includes(word) ? result.push(word) : word)
    if(result.length === 0){ return 'death' }
    return result.join(' ');
}

console.log((commonGround("eat chicken", "eat chicken and rice"))) // eat chicken