// Description:
// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

// My Solution

// P - Parameters
// 4 string representing the code entered by the useer, the code that can be used, the current date and the expiring date

// R - Return
// a boolean indicating whatever the coupon is valid and if it's expired or not

// E - Examples
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

// P - Pseudocode
// check if the code entered by the user is equal to the available code
// check if the current date is greater than the expiring date
// return a boolean

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if(enteredCode === correctCode){
        currentDate = new Date(currentDate)
        expirationDate = new Date(expirationDate)
        return currentDate <= expirationDate
    } else{
        return false
    }
}

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014')) //true
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014')) //false