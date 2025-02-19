function nicknameGenerator(name){
  if(name.length < 4){
    return 'Error: Name too short'
  }
  const vowels = [
    'a','e','i','o','u'
  ]
  if(vowels.includes(name[2])){
    return name.slice(0,4)
  }
  return name.slice(0,3)
}