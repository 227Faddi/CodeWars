function capitalize(s){
  const arr = s.split('')
  const odd = arr.map((letter, index) => index % 2 === 0 ? letter : letter.toUpperCase()).join('')
  const even = arr.map((letter, index) => index % 2 === 0 ? letter.toUpperCase() : letter).join('')
  
  return [even, odd];
};