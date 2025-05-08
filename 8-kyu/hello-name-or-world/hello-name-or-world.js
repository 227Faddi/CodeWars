function hello(name) {
  if(!name || name === '') return 'Hello, World!'
  
  const nameUp = name[0].toUpperCase() + name.slice(1, name.length).toLowerCase()
  return `Hello, ${nameUp}!`;
}