// Description:
// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

function calc(x){
    let tot1 = '';
    for(let i = 0; i < x.length; i++){
        tot1 += x.charCodeAt(i)
    }
    let tot2 = tot1.replace(/7/gi, '1')

    tot1 = tot1.split('').reduce((acc, chart) => acc += Number(chart), 0)

    tot2 = tot2.split('').reduce((acc, chart) => acc += Number(chart), 0)

    return tot1 - tot2
}

console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'))