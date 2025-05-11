const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 2,
            autoplay: {
                delay: 3000,
            },
        },
        0: {
            slidesPerView: 1,
            autoplay: {
                delay: 4000,
            },
        }
    }
});