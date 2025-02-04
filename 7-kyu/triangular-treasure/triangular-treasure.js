// Return the nth triangular number
function triangular( n ) {
  if(n === 0 || n < 0) return 0
  return n * (n + 1) / 2
}
​