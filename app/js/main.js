$(function(){

  $('.button-menu').on('click', function() {
    $('.menu').toggleClass('menu--active');
    $(this).toggleClass('button-menu--active');
    $('body').toggleClass('body--active');
  });

  $('.menu__link').on('click', function() {
    $('.menu').removeClass('menu--active');
    $('.button-menu').removeClass('button-menu--active');
    $('body').removeClass('body--active');
  });

  
  const swiper = new Swiper('.header__swiper', {
    // loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'progressbar',
    // },
  
    
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      dragSize: 60,
    },
  });
}); 