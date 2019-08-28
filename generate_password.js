function sample(collection) {
  const index = Math.floor(Math.random() * collection.length)
  return collection[index]
}

function generatePassword(options) {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // create a collection to store things user picked up
  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat(...lowerCaseLetters)
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(...upperCaseLetters)
  }

  if (options.numbers === 'on') {
    collection = collection.concat(...numbers)
  }

  if (options.symbols === 'on') {
    collection = collection.concat(...symbols)
  }


  // remove things user do not need
  if (options.excludeCharacters) {
    collection = collection.filter(character => !options.excludeCharacters.includes(character))
  }

  // if user make empty collection
  if (collection.length === 0) {
    return 'you must select at least one character set'
  }

  //start generating password
  let passWord = ''
  for (let i = 1; i <= options.length; i++) {
    passWord += sample(collection)
  }

  //return the generated password
  return passWord
}

module.exports = generatePassword