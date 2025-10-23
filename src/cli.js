import readlineSync from 'readline-sync'

const greetUserByName = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  return userName
}

const askQuestion = (question) => {
  return readlineSync.question(question)
}

export { greetUserByName, askQuestion }
