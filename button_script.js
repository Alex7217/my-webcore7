const cover = document.getElementById('cover');
const containerList = document.querySelector('.swiper.slider-1');
const showImage = document.getElementById('showImage');
const hideImage = document.getElementById('hideImage');

cover.addEventListener('click', function() {
  if (window.innerWidth >= 321 && window.innerWidth <= 768) {
    const linksToShowHide = Array.from(containerList.querySelectorAll('.swiper-wrapper.grid .swiper-slide')).slice(-5);
    
    if (cover.textContent === 'Показать все') {
      linksToShowHide.forEach(link => {
        link.style.display = 'inline-block';
      });
      containerList.style.flexWrap = 'wrap';
      cover.textContent = 'Скрыть';
      showImage.style.display = 'none';
      hideImage.style.display = 'inline';
    } else {
      linksToShowHide.forEach(link => {
        link.style.display = 'none';
      });
      containerList.style.flexWrap = 'nowrap';
      cover.textContent = 'Показать все';
      showImage.style.display = 'inline';
      hideImage.style.display = 'none';
    }
  } else if (window.innerWidth >= 769) {
    const linksToShowHide = Array.from(containerList.querySelectorAll('.swiper-slide')).slice(-3);
    
    if (cover.textContent === 'Показать все') {
      linksToShowHide.forEach(link => {
        link.style.display = 'inline-block';
      });
      containerList.style.flexWrap = 'wrap';
      cover.textContent = 'Скрыть';
      showImage.style.display = 'none';
      hideImage.style.display = 'inline';
    } else {
      linksToShowHide.forEach(link => {
        link.style.display = 'none';
      });
      containerList.style.flexWrap = 'nowrap';
      cover.textContent = 'Показать все';
      showImage.style.display = 'inline';
      hideImage.style.display = 'none';
    }
  }
});
