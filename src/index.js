import './style.css';
import '@splidejs/splide/css';
import Splide from '@splidejs/splide';

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

var splide = new Splide('.splide', {
  perPage: 3,
  breakpoints: {
    1200: {
      perPage: 3,
    },
    640: {
      perPage: 2,
    },
    400: {
      perPage: 1,
    },
  },
  gap: '64px',
  focus: 'center',
  omitEnd: true,
  height: '480px',
  autoWidth: true,
});

splide.mount();
