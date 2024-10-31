// Description:
// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
//   //returns 3


// obj always valid, yes no empty 

// a number intger counting all the strings present inside the object 


function strCount(obj) {
    let count = 0;

    for (const propriety in obj) {
        if (typeof obj[propriety] === 'string') {
            count++;
        }
        else if (Array.isArray(obj[propriety])) {
            obj[propriety].forEach(el => {
                if (typeof el === 'string') {
                    count++;
                }
                else if (typeof el === 'object' && el !== null) {
                    count += strCount(el);
                }
            });
        }
        else if (typeof obj[propriety] === 'object' && obj[propriety] !== null) {
            count += strCount(obj[propriety]);
        }
    }
    return count;
}

console.log(strCount({
first: "1",
second: "2",
third: false,
fourth: ["anytime",2,3,4],
fifth:  null
}))