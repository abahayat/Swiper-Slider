$(document).ready(function(){
    
    var mySwiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
        scrollbar: {
        el: '.swiper-scrollbar',
      },
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
      },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
      },
        speed: 1000,
    })
    
});