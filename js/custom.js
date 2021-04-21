$(function(){

    //banner-slider-js
    $('.main-banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        infinite:true,
      });
    $('.feat').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        infinite:true,
        responsive: [
          {
            breakpoint: 1199.98,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              arrows:false,
              infinite:true,
            }
          },
          {
            breakpoint: 576.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              arrows:false,
              infinite:true,
              vertical:true,
            }
          }
        ]
      });
    $('.testimonial-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        infinite:true,
        responsive: [
          {
            breakpoint: 1199.98,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 991.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              arrows:false,
              infinite:true,
            }
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              arrows:false,
              infinite:true,
            }
          },
          {
            breakpoint: 576.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              arrows:false,
              infinite:true,
            }
          }
        ]
      });
      var containerEl = document.querySelector('.Azmir');

      var mixer = mixitup(containerEl);
      var containerEl = document.querySelector('.Azmir');

      var mixer = mixitup(containerEl);
});