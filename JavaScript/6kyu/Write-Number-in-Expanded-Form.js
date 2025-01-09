// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  let result = "";
  const string = String(num);
  const length = string.length;
  const arr = string
    .split("")
    .map((num, index) => (num > 0 ? num * Math.pow(10, length - index - 1) : 0))
    .filter((num) => num > 0)
    .join(" + ");
  return arr;
}

console.log(expandedForm(12022));
