$(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  /**slider 2 */
  $(".slider-two")
  .not(".slick-initialized")
  .slick({
      prevArrow:".site-slider-two .prev",
      nextArrow:".site-slider-two .next",
      slidesToShow:1,
      
      slidesToScroll:1,
      autoplaySpeed:3000
  });