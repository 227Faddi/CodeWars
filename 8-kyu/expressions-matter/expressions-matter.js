function expressionMatter(a, b, c) {
  let arr = []
  arr.push(a + b + c)
  arr.push(a * b * c)
  arr.push(a * (b + c))
  arr.push(a + (b * c))
  arr.push((a + b) * c)
  arr.push((a + b) * c)
  
  const result = Math.max(...arr)
  
  return result
}