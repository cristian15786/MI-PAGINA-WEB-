const slider = document.querySelector('.slider');
const slides = slider.children;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slideWidth = slides[0].clientWidth;
let currentPosition = 0;

nextBtn.addEventListener('click', () => {
  if (currentPosition > -(slideWidth * (slides.length - 1))) {
    currentPosition -= slideWidth;
    slider.style.transform = `translateX(${currentPosition}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (currentPosition < 0) {
    currentPosition += slideWidth;
    slider.style.transform = `translateX(${currentPosition}px)`;
  }
});
