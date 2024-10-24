// Description:
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

function last(x){
    let arr = x.split(' ');
    return arr.sort((a, b) =>{
        if(a[a.length - 1] < b[b.length - 1]){ 
            return -1; 
        }
        if(a[a.length - 1] > b[b.length - 1]) { 
            return 1; 
        }
        return 0;
    })
}
    


console.log(last('man i need a taxi up to ubud')) // ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);