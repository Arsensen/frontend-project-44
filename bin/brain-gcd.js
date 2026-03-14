#!/usr/bin/env node
import { baseQuestion } from '../src/helpers/basic-question.js';
import { startGame } from '../src/index.js';

const gcd = (a, b) => {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }

    return String(a);
};

export const startGCDGame = (name) => {
    for (let i = 0; i < 3; i++) {
        let a = Math.floor(Math.random() * 100);
        let b = Math.floor(Math.random() * 100);

        const correct = gcd(a, b);
        const question = `${a} ${b}`;
        const answer = baseQuestion(question);

        if (answer === String(correct)) {
            console.log('Correct!');
        } else {
            throw new Error(
                `${answer} is wrong answer ;(. Correct answer was '${correct}'. Let's try again, ${name}!`,
            );
        }
    }
};

startGame(startGCDGame, 'Find the greatest common divisor of given numbers.');
