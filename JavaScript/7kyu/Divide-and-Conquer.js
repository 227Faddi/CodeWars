// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x) {
  let tot1 = 0;
  let tot2 = 0;
  x.map((num) => {
    if (typeof num === "string") {
      tot1 += Number(num);
    }
    if (typeof num === "number") {
      tot2 += num;
    }
  });
  return tot2 - tot1;
}
