function combat(health, damage) {
  const stat = health - damage
  return stat < 0 ? 0 : stat
}