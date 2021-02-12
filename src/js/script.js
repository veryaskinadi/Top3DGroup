new Swiper('.swiper-container', {
    updateOnWindowResize: true,
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 2,
    navigation: {
        nextEl: '.main-slider__arrow-next',
        prevEl: '.main-slider__arrow-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 70,
        }
    }
});

humburger.onclick = function() {
    leftMenu.classList.toggle ('h-leftMenu_active')
};