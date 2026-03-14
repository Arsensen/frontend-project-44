#!/usr/bin/env node
import { baseQuestion } from '../src/helpers/basic-question.js'
import { startGame } from '../src/index.js'

const isPrime = (num) => {
  if (num <= 1) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

const generatePrimeQuestion = () => {
  const number = Math.floor(Math.random() * 100)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return { question: String(number), correctAnswer }
}

export const startPrimeGame = (name) => {
  for (let i = 0; i < 3; i++) {
    const { question, correctAnswer } = generatePrimeQuestion()
    const answer = baseQuestion(question)
    if (answer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      throw new Error(
        `${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`,
      )
    }
  }
}

startGame(
  startPrimeGame,
  'Answer "yes" if given number is prime. Otherwise answer "no".',
)
