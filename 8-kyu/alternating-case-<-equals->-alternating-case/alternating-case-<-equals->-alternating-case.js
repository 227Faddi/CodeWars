String.prototype.toAlternatingCase = function () {
  const result = this.split('').map((letter) => letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()).join('')
  return result
}