import './style.scss';
import Glide from '@glidejs/glide';

let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('#nav');
let header = document.querySelector('#header');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.remove('py-8');
    header.classList.add('py-3');
  } else {
    header.classList.remove('py-3');
    header.classList.add('py-8');
  }
}

// Slider Logic
const cards = document.querySelectorAll('.glide__slide');

cards.forEach((_, i) => {
  const dot = `<button class="glide__bullet" data-glide-dir="=${i}"></button>`;
  return (document.querySelector('.glide__bullets').innerHTML += dot);
});

new Glide('.glide', {
  type: 'slider',
  startAt: 0,
  perView: 3,
  keyboard: true,
  gap: 64,
  bound: true,
  focusAt: 0,
  breakpoints: {
    800: {
      perView: 2,
    },
    400: {
      perView: 1,
    },
  },
}).mount();
