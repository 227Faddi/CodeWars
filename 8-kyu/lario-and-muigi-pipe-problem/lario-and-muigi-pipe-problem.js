function pipeFix(numbers){
  const min = Math.min(...numbers)
  const max = Math.max(...numbers)
  
  let array = []
  
  for(let i = min; i <= max; i++){
    array.push(i)
  }
  
  return array
}