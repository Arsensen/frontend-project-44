#!/usr/bin/env node
import { baseQuestion } from '../src/helpers/basic-question.js';
import { startGame } from '../src/index.js';

const generateTask = () => {
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
};

export const startCalcGame = (generateTask, name) => {
    for (let i = 0; i < 3; i++) {
        const [question, correctAnswer] = generateTask();

        const userAnswer = baseQuestion(question);

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            throw new Error(
                `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`,
            );
        }
    }
};

startGame(
    startCalcGame.bind(this, generateTask),
    'What is the result of the expression?',
);
