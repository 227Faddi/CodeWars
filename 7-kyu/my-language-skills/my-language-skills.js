function myLanguages(results) {
  let arr = []
  
  for (const [key, value] of Object.entries(results)) {
    if(value >= 60){
      arr.push(value)
    }
  }
  
  arr = arr.sort((a, b) => a - b).reverse().map((num) => Object.keys(results).find(key => results[key] === num))
  
  
  return arr
}