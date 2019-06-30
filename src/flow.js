import readlineSync from 'readline-sync';
import greet from '.';

const maxRepeat = 3;
const startRepeat = 0;
let playerName;

const brainEven = (question, answer, repeat = startRepeat) => {
  const currentQuestion = question();
  console.log(`Question: ${currentQuestion}`);
  const actual = readlineSync.question('Your answer: ');
  const correctAnswer = answer(currentQuestion);
  const curentRepeat = repeat + 1;

  if (actual !== correctAnswer) {
    console.log(`'${actual}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
    return null;
  }

  console.log('Correct!');

  if (curentRepeat === maxRepeat) {
    console.log(`Congratulations, ${playerName}!`);
    return null;
  }

  return brainEven(question, answer, curentRepeat);
};

const flow = (getQuestion, getAnswer, descriptionGame) => {
  console.log(`Welcome to the Brain Games!\n${descriptionGame}\n`);
  playerName = greet();

  return brainEven(getQuestion, getAnswer);
};

export default flow;
