$(function(){

  $('.about-slider').slick({
    prevArrow: '<button class="about-slider__btn about-slider__left" type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button class="about-slider__btn about-slider__right" type="button" class="slick-next">Next</button>',
    asNavFor: '.about-subslider',

    infinite: false,
    fade: true,
    dots: true,
  });

  $('.about-subslider').slick({
    prevArrow: '<svg class="arrow-left" width="11" height="19" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 19.8999L1 10.5999L11.5 0.999903" stroke="#C6C6C6" stroke-width="1.2"/></svg>',
    nextArrow: '<svg class="arrow-right" width="11" height="19" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L11.5 10.3L1 19.9" stroke="#C6C6C6" stroke-width="1.2"/></svg>',

    asNavFor: '.about-slider',
    fade: true,
    infinite: false,
  });

  $(window).scroll(function(){
    if ($(document).scrollTop() > 150) {
      $(".header__top").addClass("header--scroll");
    } else {
      $(".header__top").removeClass("header--scroll");
    }
  });

  $('.button-menu').on('click', function() {
    $('.menu').toggleClass('menu--active');
    $(this).toggleClass('button-menu--active');
    $('.overlay').toggleClass('overlay--active');
  });

  $('.menu__link').on('click', function() {
    $('.menu').removeClass('menu--active');
    $('.button-menu').removeClass('button-menu--active');
    $('.overlay').removeClass('overlay--active');
  });

  $('.overlay').on('click', function () {
    $(this).removeClass('overlay--active');
    $('.menu').removeClass('menu--active');
    $('.button-menu').removeClass('button-menu--active');
  });

  

  // $('menu__social').on('click', function() {
  //   $('.menu').removeClass('menu--active');
  //   $('.button-menu').removeClass('button-menu--active');
  //   $('.overlay').removeClass('overlay--active');
  // });

 

  // $("a[href^='#']").click(function(){
  //   var _href = $(this).attr("href");
  //   $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 2000);
  //   return false;
  // });

  $(".star").rateYo({
    starWidth: "24px",
    spacing: "15px",
    readOnly: true,
  });

  $(".score").rateYo({
    starWidth: "24px",
    spacing: "15px",
    fullStar: true,
  });

  
  

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