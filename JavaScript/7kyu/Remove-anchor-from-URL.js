// Description:
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// My Solution

// P - Parameters
// a string representing an url

// R - Return
// the string without the anchor and the text after it

// E - Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// P - Pseudocode
// transform the string into an array
// check the index of the #
// if there isn't one then return the string
// if there is one use slice to return only the chart before it


function removeUrlAnchor(url){
    let indexOfAnchor = url.split('').indexOf('#')
    if(indexOfAnchor != -1){
        return url.slice(0, indexOfAnchor)
    } else{
        return url
    }
}



console.log(removeUrlAnchor('www.codewars.com#about')) //  'www.codewars.com'
console.log(removeUrlAnchor('www.codewars.com')) //  'www.codewars.com'
