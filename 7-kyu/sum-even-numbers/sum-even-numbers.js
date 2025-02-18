function sumEvenNumbers(input) {
  return input.reduce((acc, num) => num % 2 === 0 ? acc += num : acc, 0)
}
​