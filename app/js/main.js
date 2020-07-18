$(function () {

  $('.weekly__slider').slick({
    prevArrow: '<button class="slick-arrow slick-arrow--prev" type="button"><span class="icon-chevron-left"></button>',
    nextArrow: '<button class="slick-arrow slick-arrow--next" type="button"><span class="icon-chevron-right"></button>',
    appendArrows: '.arrows-wrap',

  });

  $('.followers__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button class="slick-arrow slick-arrow--prev" type="button"><span class="icon-chevron-left"></button>',
    nextArrow: '<button class="slick-arrow slick-arrow--next" type="button"><span class="icon-chevron-right"></button>',
    appendArrows: '.arrows-followers',

  });

  // $('.feedback__slider').slick({
  //   prevArrow: '<button class="slick-arrow slick-arrow--prev" type="button"><span class="icon-chevron-left"></button>',
  //   nextArrow: '<button class="slick-arrow slick-arrow--next" type="button"><span class="icon-chevron-right"></button>',
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  // });

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

  $(".rate-star__slider").rateYo({
    rating: 4.5,
    starWidth: "15px",
    spacing: "3px",
    readOnly: true,
    ratedFill: "#ffc000",
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><polygon opacity=".3" points="12,15.4 8.24,17.67 9.24,13.39 5.92,10.51 10.3,10.13 12,6.1 13.71,10.14 18.09,10.52 14.77,13.4 15.77,17.68"/><path d="M22,9.24l-7.19-0.62L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27L18.18,21l-1.63-7.03L22,9.24z M12,15.4l-3.76,2.27 l1-4.28l-3.32-2.88l4.38-0.38L12,6.1l1.71,4.04l4.38,0.38l-3.32,2.88l1,4.28L12,15.4z"/></g></g></svg>'
  });

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "15px",
    spacing: "1px",
    readOnly: true,
    ratedFill: "#ffc000",
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><polygon opacity=".3" points="12,15.4 8.24,17.67 9.24,13.39 5.92,10.51 10.3,10.13 12,6.1 13.71,10.14 18.09,10.52 14.77,13.4 15.77,17.68"/><path d="M22,9.24l-7.19-0.62L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27L18.18,21l-1.63-7.03L22,9.24z M12,15.4l-3.76,2.27 l1-4.28l-3.32-2.88l4.38-0.38L12,6.1l1.71,4.04l4.38,0.38l-3.32,2.88l1,4.28L12,15.4z"/></g></g></svg>'
  });

  var mixer = mixitup('.products__items');

});