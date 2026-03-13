#!/usr/bin/env node
import { askQuestion } from '../src/cli.js';
import { startGame } from '../src/index.js';

export const startCalcGame = (generateTask, name) => {
    for (let i = 0; i < 3; i++) {
        const [question, correctAnswer] = generateTask();

        console.log(`Question: ${question}`);
        const userAnswer = askQuestion('Your answer: ');

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            throw new Error(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);
        }
    }
}

export const generateTask = () => {
    const operations = ['+', '-', '*'];

    const a = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    const op = operations[Math.floor(Math.random() * operations.length)];

    let answer;

    switch (op) {
        case '+':
            answer = a + b;
            break;
        case '-':
            answer = a - b;
            break;
        case '*':
            answer = a * b;
            break;
        default:
            throw new Error('Impossible case!');
    }

    const question = `${a} ${op} ${b}`;

    return [question, String(answer)];
}

startGame(startCalcGame.bind(this, generateTask), 'What is the result of the expression?');