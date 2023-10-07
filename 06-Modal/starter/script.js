'use strict';

const openModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

closeModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
