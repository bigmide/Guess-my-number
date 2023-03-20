'use strict';

let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayContent = function (identifier, message) {
  document.querySelector(`${identifier}`).textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayContent('.message', '⛔️ No Number!');
  } else if (guess === secreteNumber) {
    displayContent('.message', '🎉 Correct Number!');
    displayContent('.number', secreteNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (highscore < score) {
      highscore = score;
      displayContent('.highscore', highscore);
    }

    document.querySelector('.check').disabled = true;
    document.querySelector('.guess').disabled = true;
  } else if (guess !== secreteNumber) {
    if (score > 1) {
      displayContent(
        '.message',
        guess > secreteNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score -= 1;
      displayContent('.score', score);
    } else {
      displayContent('.message', '💥 You Lost the Game');
      displayContent('.score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  displayContent('.score', score);
  displayContent('.message', 'Start guessing...');
  displayContent('.number', '?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
  document.querySelector('.guess').disabled = false;
});
