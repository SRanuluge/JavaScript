'use strict';

const inputValue = document.querySelector('.guess');
const number = 11;

const value = document.querySelector('.guess').value;

document.querySelector('.check').addEventListener('click', () => {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (guessNumber === number) {
    document.querySelector('.score').textContent++;
    document.querySelector('.label-score ').style.color = 'green';
  }
  document.querySelector('.score').textContent--;
});
