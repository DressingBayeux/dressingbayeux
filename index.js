$(window).on('load',function(){
    setTimeout(function(){
        $('.slicker').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay:true,
          autoplaySpeed:7000,
          speed: 3000,
          infinite: true,
          dots: true,
          dotsClass: 'boutonperso',
        }); 
    },1000);
});