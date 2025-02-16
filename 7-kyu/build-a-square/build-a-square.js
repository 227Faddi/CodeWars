function generateShape(integer){
  let string = '+'.repeat(integer)
  for(let i = 1; i < integer; i++){
    string += '\n' + '+'.repeat(integer)
  }
  return string
}