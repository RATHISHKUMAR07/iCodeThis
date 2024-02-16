const favoriteBtns = document.querySelectorAll('.favorite_btn');
const sliderInner = document.querySelector('.slider_inner');
const sliderItems = document.querySelectorAll('.slider_item');
const sliderSwitchBtns = document.querySelectorAll('[data-switch-btn-index]');

const toggleFavoriteBtnState = clickedBtn => {
    if (clickedBtn.getAttribute('aria-pressed') === 'false') {
        clickedBtn.setAttribute('aria-pressed', true);
        clickedBtn.setAttribute('aria-label', 'Add item to favorites');
    } else {
        clickedBtn.setAttribute('aria-pressed', false);
        clickedBtn.setAttribute('aria-label', 'Remove item from favorites');
    }
}

const switchSlider = clickedBtn => {
    const index = +clickedBtn.dataset.switchBtnIndex;
    sliderInner.style.transform = `translateX(${-100 * index}%)`;

    if (document.querySelector('[data-switch-btn-index][aria-pressed="true"]')) {
        document.querySelector('[data-switch-btn-index][aria-pressed="true"]').setAttribute('aria-pressed', false);
    }
    clickedBtn.setAttribute('aria-pressed', true);

    sliderItems.forEach(sliderItem => sliderItem.style.visibility = 'visible');

    setTimeout(() => {
        sliderItems.forEach(sliderItem => sliderItem.style.visibility = 'hidden');
        document.querySelector(`[data-slider-item-index="${index}"]`).style.visibility = 'visible';
    }, 350);
}

favoriteBtns.forEach(favoriteBtn => {
    favoriteBtn.addEventListener('click', () => toggleFavoriteBtnState(favoriteBtn));
})

sliderSwitchBtns.forEach(sliderSwitchBtn => {
    sliderSwitchBtn.addEventListener('click', () => switchSlider(sliderSwitchBtn));
});

window.addEventListener('DOMContentLoaded', () => switchSlider(document.querySelector('[data-switch-btn-index="3"]')));
