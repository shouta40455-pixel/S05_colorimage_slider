const containers = document.querySelectorAll('.slider-container');

containers.forEach((container) => {
  const slider = container.querySelector('.slider');
  const afterWrap = container.querySelector('.image-after-wrap');
  const sliderButton = container.querySelector('.slider-button');

  slider.addEventListener('input', (e) => {
    const value = e.target.value;
    afterWrap.style.width = `${value}%`;
    sliderButton.style.left = `${value}%`;
  });
});
