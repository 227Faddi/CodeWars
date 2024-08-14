// DESCRIPTION:
// You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

// class Student {
//   constructor(name, fives, tens, twenties) {
//     this.name = name;
//     this.fives = fives;
//     this.tens = tens;
//     this.twenties = twenties;
//   }
// }
// As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

// Notes:

// Each student will have a unique name
// There will always be a clear winner: either one person has the most, or everyone has the same amount
// If there is only one student, then that student has the most money

// My Solution

// P - Parameters
// an array of objects with different proprieties

// R - Return
// the name of which object has the highest value out of all as a string

// E - Examples 
// mostMoney([andy, stephen, eric, david, phil]) //"Eric"
// mostMoney([david, cam, geoff])  //"all"

// P - Pseudocode
// loop in to the array to check every Object
// calculate the total number of each propriety based on the name of it
// check for single values
// check if they have all the same total value
// return the object that has the highest value out of all


class Student {
    constructor(name, fives, tens, twenties) {
      this.name = name;
      this.fives = fives;
      this.tens = tens;
      this.twenties = twenties;
    }
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);

function mostMoney(students) {
    if(students.length < 2){
        return students[0].name
    }
    const totalMoney = students.map((student, index) =>{
        let studentMoney = 0;
        for(let i = 0; i < student.fives; i++){
            studentMoney += 5
        }
        for(let i = 0; i < student.tens; i++){
            studentMoney += 10
        }
        for(let i = 0; i < student.twenties; i++){
            studentMoney += 20
        }
        return studentMoney
    });

    const allEqual = new Set(totalMoney).size === 1;
    if(allEqual === true){
        return 'all'
    }

    let index = totalMoney.findIndex(money => money === Math.max(...totalMoney))

    return students[index].name
}

console.log(mostMoney([andy, stephen, eric, david, phil])) //"Eric"
console.log(mostMoney([david, cam, geoff]))  //"all"