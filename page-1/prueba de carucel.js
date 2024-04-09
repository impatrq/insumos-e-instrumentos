const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
let currentImageIndex = 0;
let isAnimating = false;

function animateCarousel() {
  isAnimating = true;
  carousel.classList.add('animating');
  currentImageIndex++;

  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  images.forEach((img, index) => {
    const newPosition = (index - currentImageIndex) * 100;
    img.style.transform = `translateX(${newPosition}%)`;
  });

  setTimeout(() => {
    carousel.classList.remove('animating');
    isAnimating = false;
  }, 500);
}

setInterval(() => {
  if (!isAnimating) {
    animateCarousel();
  }
}, 4500);