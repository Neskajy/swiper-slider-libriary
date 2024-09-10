const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    effect: 'coverflow', //coverflow, flip,, fade, cube
    // initialSlide: 2, //Научинаем со 2 слайда
    // freeMode: true, // можно перелистывать как ленту
    slidesPerView: 1.5,
    centeredSlides: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    // autoplay: {
    //     delay: 1000,
    // }
});