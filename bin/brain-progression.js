#!/usr/bin/env node
import { baseQuestion } from "../src/basic-question.js";
import { startGame } from "../src/index.js";

const generateProgression = () => {
    const length = Math.floor(Math.random() * 6) + 5;
    const start = Math.floor(Math.random() * 100);
    const step = Math.floor(Math.random() * 10);
    const progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(start + i * step);
    }
    const hiddenIndex = Math.floor(Math.random() * length);
    const correctAnswer = progression[hiddenIndex];
    const question = progression.map((num, idx) => idx === hiddenIndex ? '..' : num).join(' ');
    return { question, correctAnswer: String(correctAnswer) };
};

export const startProgressionGame = (name) => {
    for (let i = 0; i < 3; i++) {
        const { question, correctAnswer } = generateProgression();
        const answer = baseQuestion(question);
        if (answer === correctAnswer) {
            console.log('Correct!');
        } else {
            throw new Error(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);
        }
    }
};

startGame(startProgressionGame, 'What number is missing in the progression?');