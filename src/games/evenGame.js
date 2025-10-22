import getRandomNum from "../utils/getRandomNumber.js"

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = num => num % 2 === 0

const generateData = () => {
  const generatedData = {} // объект для хранения вопроса и ответа
  const randomNum = getRandomNum(100)
  generatedData['question'] = randomNum

  const answer = isEven(randomNum) ? 'yes' : 'no'
  generatedData['answer'] = answer

  return generatedData
}

export { gameDescription, generateData }
