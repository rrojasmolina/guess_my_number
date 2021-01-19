'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number! 😃';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//let number = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const createNumber = function () {
  const number = Math.trunc(Math.random() * 20) + 1;
  return number;
};

const showScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const showNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const setBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const setNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

let number = createNumber();
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');
    // when player wins
  } else if (guess === number) {
    //document.querySelector('.number').textContent = number;
    showNumber(number);
    //document.querySelector('.message').textContent = 'Correct number! 😃';
    displayMessage('Correct number! 😃');
    //document.querySelector('body').style.backgroundColor = '#60b347';
    setBackground('#60b347');
    //document.querySelector('.number').style.width = '30rem';
    setNumberWidth('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    } //when the guess is wrong
  } else if (guess !== number) {
    if (score > 1) {
      //document.querySelector('.message').textContent = guess > number ? 'Too high 📈' : 'Too low 📉';
      //guess > number ? displayMessage('Too high 📈') : displayMessage('Too low 📉');
      displayMessage(guess > number ? 'Too high 📈' : 'Too low 📉');
      score--;
      //document.querySelector('.score').textContent = score;
      showScore(score);
    } else {
      //document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');
      //document.querySelector('.score').textContent = 0;
      showScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  //number = Math.trunc(Math.random() * 20) + 1;
  number = createNumber();
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  //document.querySelector('.number').textContent = '?';
  showNumber('?');
  //document.querySelector('.score').textContent = score;
  showScore(score);
  //document.querySelector('body').style.backgroundColor = '#222';
  setBackground('#222');
  //document.querySelector('.number').style.width = '15rem';
  setNumberWidth('15rem');
  document.querySelector('.guess').value = '';
});
