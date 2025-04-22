function saleHotdogs(n){
  const count =  (n >= 5) && (n < 10) ? 95 : n < 5 ? 100 : 90
  return n * count
}