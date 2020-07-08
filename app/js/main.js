$(function () {

  $('.weekly__slaider').slick({
    prevArrow: '<button class="slick-prev" type="button"><img src="images/slaider/arrow-left.png" alt="prev"></button>',
    nextArrow: '<button class="slick-next" type="button"><img src="images/slaider/arrow-right.png" alt="next"></button>'

  });

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "15px",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z "></path>"+"</svg>'
  });

});