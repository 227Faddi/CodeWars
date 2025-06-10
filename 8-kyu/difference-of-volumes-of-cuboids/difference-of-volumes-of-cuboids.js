function findDifference(a, b) {
  const one = a.reduce((acc, num) => acc = acc * num, 1)
  const two = b.reduce((acc, num) => acc = acc * num, 1)
  return one > two ? one - two : two - one
}