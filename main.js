var slideIndex = 1;

const showSlider = (n) => {
  let i;
  const slider = document.getElementsByClassName('slider__item');
  const dots = document.getElementsByClassName('slider__dot');
  if (n > slider.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slider.length;
  }
  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slider[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
};

const plusSlider = (n) => showSlider((slideIndex += n));

const currentSlider = (n) => showSlider((slideIndex = n));

showSlider(slideIndex);
