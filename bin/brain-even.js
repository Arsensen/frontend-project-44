#!/usr/bin/env node
import { baseQuestion } from "../src/basic-question.js";
import { startGame } from "../src/index.js"; 

export const startEvenGame = (name) => {
    for (let i = 0; i < 3; i++) {
        const number = Math.floor(Math.random() * 100);
        const answer = baseQuestion(number);

        if ((answer === 'yes' && number % 2 === 0) || (answer === 'no' && number % 2 === 1)) {
            console.log('Correct!');
        } else {
            throw new Error(`${answer} is wrong answer ;(. Correct answer was '${number % 2 ? 'no' : 'yes'}'. Let's try again, ${name}!`);
        }
    }
}

startGame(startEvenGame, 'Answer "yes" if the number is even, otherwise answer "no".');
