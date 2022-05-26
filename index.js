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

// burger


let burgeropen = document.getElementById("openburger");

function closingburger(event) {
    openburger.hidden = false;
    event.preventDefault();
}

function openingburger(event) {
  openburger.hidden = true;
  event.preventDefault();
}

// contact

let contactopen = document.getElementById("opencontact");

function closingcontact(event) {
    opencontact.hidden = false;
    event.preventDefault();
}

function openingcontact(event) {
  opencontact.hidden = true;
  event.preventDefault();
}