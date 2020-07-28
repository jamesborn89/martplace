$(function () {

  $('.weekly__slider').slick({
    prevArrow: '<button class="arrow arrow--prev slick-arrow slick-arrow--prev" type="button"><span class="icon-chevron-left"></button>',
    nextArrow: '<button class="arrow arrow--next slick-arrow slick-arrow--next" type="button"><span class="icon-chevron-right"></button>',
    appendArrows: '.weekly__arrows',

  });

  $('.followers__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button class="arrow arrow--prev slick-arrow slick-arrow--prev" type="button"><span class="icon-chevron-left"></button>',
    nextArrow: '<button class="arrow arrow--next slick-arrow slick-arrow--next" type="button"><span class="icon-chevron-right"></button>',
    appendArrows: '.arrows-followers',

  });

  var swiper = new Swiper('.feedback__slider', {
    slideClass: 'feedback__item',
    wrapperClass: 'feedback__slider-wrapper',
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  $(".card-product__stars").rateYo({
    rating: 4.5,
    starWidth: "15px",
    spacing: "3px",
    readOnly: true,
   });

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "15px",
    spacing: "1px",
    readOnly: true,
    });

  var mixer = mixitup('.products__items');

});