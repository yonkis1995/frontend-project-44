import getRandomNum from '../utils/getRandomNumber.js'

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (num) => {
  if (num < 2) {
    return false
  }
  if ((num === 2) || (num === 3)) {
    return true
  }
  if (num % 2 === 0) {
    return false
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const generateData = () => {
  const generatedData = {} // объект для хранения вопроса и ответа
  const randomNum = getRandomNum(100)
  generatedData['question'] = randomNum

  const answer = isPrime(randomNum) ? 'yes' : 'no'
  generatedData['answer'] = answer

  return generatedData
}

export { gameDescription, generateData }
