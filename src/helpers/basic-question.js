import { askQuestion } from '../cli.js'

export const baseQuestion = (question) => {
  console.log(`Question: ${question}`)
  return askQuestion('Your answer: ')
}
