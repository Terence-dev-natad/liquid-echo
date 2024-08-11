document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', () => {
      toggleButton.classList.toggle('active');
    });
  });


//img slider to dito
const beforeBtn = document.getElementById('before');
const nextBtn = document.getElementById('next');
const imgContainer = document.getElementById('img-container');

const maxScroll = imgContainer.scrollWidth - imgContainer.offsetWidth;

nextBtn.addEventListener("click", () => {
  imgContainer.style.scrollBehavior = "smooth";
  if (imgContainer.scrollLeft >= maxScroll) {
    imgContainer.scrollLeft = 0;
  } else {
    imgContainer.scrollLeft += imgContainer.offsetWidth;
  }
});

beforeBtn.addEventListener("click", () => {
  imgContainer.style.scrollBehavior = "smooth";
  if (imgContainer.scrollLeft >= maxScroll) {
    imgContainer.scrollLeft = 0;
  } else {
    imgContainer.scrollLeft -= imgContainer.offsetWidth;
  }
});