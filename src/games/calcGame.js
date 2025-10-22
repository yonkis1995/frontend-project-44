import getRandomNum from "../utils/getRandomNumber.js"

const gameDescription = 'What is the result of the expression?'

const getRandomOperator = operators => operators[getRandomNum(operators.length)]

const generateData = () => {
  const generatedData = {} // объект для хранения вопроса и ответа

  const randomNum1 = getRandomNum(100)
  const randomNum2 = getRandomNum(100)
  const randomNum3 = getRandomNum(10) // число меньше 10 применяется в качестве множителя при операции произведения

  const operator = getRandomOperator(['+', '-', '*'])

  let question
  let answer

  switch (operator) {
    case '+':
      question = `${randomNum1} + ${randomNum2}`
      answer = randomNum1 + randomNum2
      break
    case '-':
      question = `${randomNum1} - ${randomNum2}`
      answer = randomNum1 - randomNum2
      break
    case '*':
      question = `${randomNum1} * ${randomNum3}`
      answer = randomNum1 * randomNum3
      break
    default:
      throw new Error(`Invalid operator ${operator}`)
  }

  generatedData['question'] = question
  generatedData['answer'] = answer.toString()

  return generatedData
}

export { gameDescription, generateData }
