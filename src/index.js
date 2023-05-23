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

// Slider Logic

// const wrapper = document.querySelector('.wrapper');
const carousel = document.querySelector('#slider');
const cards = document.querySelectorAll('.slide');
const firstCardWidth = carousel.querySelector('.slide').offsetWidth;
const arrowBtns = document.querySelectorAll('#wrapper .arrow');
// const carouselChildrens = [...carousel.children];

cards.forEach(() => {
  const dot = `<li class='h-2 w-2 rounded-full bg-gray-200'></li>`;
  return (document.querySelector('#dots').innerHTML += dot);
});

// for (let i = 0; i < cards.length; i++) {
//   const dot = `<li class='h-2 w-2 rounded-full bg-gray-200'></li>`;
//   document.querySelector('#dots').innerHTML += dot;
// }

let isDragging = false,
  startX,
  startScrollLeft;

const showHideIcons = () => {
  // showing and hiding prev/next icon according to carousel scroll left value
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
  arrowBtns[0].style.display = carousel.scrollLeft == 0 ? 'none' : 'block';
  arrowBtns[1].style.display = carousel.scrollLeft == scrollWidth ? 'none' : 'block';
};

arrowBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    carousel.scrollLeft += btn.id == 'prev' ? -firstCardWidth : firstCardWidth;
    setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
  });
});

const dragStart = (e) => {
  isDragging = true;

  carousel.classList.toggle('draggable');

  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
  showHideIcons();
};

const dragStop = () => {
  isDragging = false;

  carousel.classList.toggle('draggable');
};

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);
