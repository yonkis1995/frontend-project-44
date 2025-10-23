import getRandomNum from '../utils/getRandomNumber.js'

const gameDescription = 'Find the greatest common divisor of given numbers.'

const gcd = (num1, num2) => (num2 === 0) ? num1 : gcd(num2, num1 % num2)

const generateData = () => {
  const generatedData = {} // объект для хранения вопроса и ответа

  const randomNum1 = getRandomNum(100)
  const randomNum2 = getRandomNum(100)

  generatedData['question'] = `${randomNum1} ${randomNum2}`
  generatedData['answer'] = gcd(randomNum1, randomNum2).toString()

  return generatedData
}

export { gameDescription, generateData }
