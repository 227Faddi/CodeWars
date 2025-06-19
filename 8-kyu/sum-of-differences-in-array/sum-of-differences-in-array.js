function sumOfDifferences(arr) {
  const desc = arr.sort((a,b) => b - a)
  const result = desc.reduce((acc, num, index) => index < desc.length - 1 ? acc += (num - desc[index + 1]) : acc , 0)
  return result
}