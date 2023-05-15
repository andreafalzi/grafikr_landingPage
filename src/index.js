import './style.css';

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
