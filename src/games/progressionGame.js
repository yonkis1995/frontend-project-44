const gameDescription = 'What number is missing in the progression?'

const getRandomNum = maxNum => Math.floor(Math.random() * maxNum)

const createProgression = (firstElement, step, progressionLength) => {
  const progression = []
  for (let i = 0; i < progressionLength; i++) {
    const currentElement = firstElement + i * step
    progression.push(currentElement)
  }
  return progression
}

const generateData = () => {
  const generatedData = {} // объект для хранения вопроса и ответа

  const firstElement = getRandomNum(20)
  const step = getRandomNum(10)
  const progressionLength = 10

  const progression = createProgression(firstElement, step, progressionLength)

  const indexToHide = getRandomNum(10)

  generatedData['answer'] = progression[indexToHide].toString()

  progression[indexToHide] = '..'

  generatedData['question'] = progression.join(' ')

  return generatedData
}

export { gameDescription, generateData }
