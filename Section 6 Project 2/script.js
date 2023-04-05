'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-modal');
const openButton = document.querySelectorAll('.show-modal');

// console.log(openButton);
for (let i = 0; i < openButton.length; i++) {
  openButton[i].addEventListener('click', function () {
    open();
  });
}
// closeButton.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

const check = function () {
  const YesNo = prompt('Enter a Msg y or n');
  if (YesNo === 'y') {
    close();
  } else {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
};

const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const open = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      close();
    }
  }
});

closeButton.addEventListener('click', check);
overlay.addEventListener('click', check);
