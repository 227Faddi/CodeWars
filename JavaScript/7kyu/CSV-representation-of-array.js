// Description:
// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
// Array's length > 2.

// More details here: https://en.wikipedia.org/wiki/Comma-separated_values

// Note: you shouldn't escape the \n, it should work as a new line.

// array > 2 length all valid input 

function toCsvText(array) {
    return array.map((arr) =>{
        if(array.indexOf(arr) === array.length - 1){
            return arr
        }
        return arr.slice(0, (arr.length - 1)) + `,${arr[arr.length - 1]}\n`
    }).join('')
}

console.log(toCsvText([
    [ 0, 1, 2, 3, 45 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]
   ])) //  '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34'