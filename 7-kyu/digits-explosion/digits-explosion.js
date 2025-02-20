function explode(s) {
  let arr = s.split('')
  let result = arr.map((num) => num.repeat(Number(num))).join('')
  return result
}