function bump(x){
  return x.split('').filter((chart) => chart === 'n').length <= 15 ? 'Woohoo!' : 'Car Dead'
}