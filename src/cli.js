import readlineSync from 'readline-sync'

// eslint-disable-next-line @stylistic/arrow-parens
export const askQuestion = question => readlineSync.question(question)
