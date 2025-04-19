function warnTheSheep(queue) {
  const arr = queue.reverse()
  let number
  if(arr[0] === 'wolf') return  "Pls go away and stop eating my sheep"
  arr.map((item, index) => item === 'sheep' && arr[index + 1] === 'wolf' ? number = index + 1 : null )
  return `Oi! Sheep number ${number}! You are about to be eaten by a wolf!`
}