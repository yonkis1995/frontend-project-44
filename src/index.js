import readlineSync from 'readline-sync'

const numOfRounds = 3

const runEngine = (gameDescription, generateData) => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)

  console.log(gameDescription)

  for (let i = 0; i < numOfRounds; i++) {
    const generatedData = generateData()
    const question = generatedData.question
    const answer = generatedData.answer

    console.log(`Question: ${question}`)

    const userAnswer = readlineSync.question('Your answer: ')
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${userName}!`)
}

export default runEngine
