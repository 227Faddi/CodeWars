function getRealFloor(n) {
  if(n > 13)return n - 2
  if(n === 0) return n
  return n < 0 ? n : n - 1 
}