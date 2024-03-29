$(window).scroll(function () {
    updateNav();
  });

  function updateNav() {
    if ($(window).scrollTop() > 30) {
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }
  }

function myFunction(x) {
    x.classList.toggle("change");
}
$('.loop').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:55,
    dots:false,
    nav: true,
    navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:2,
        }
    }
});

var owl = $('.owl-two');
owl.owlCarousel({
    items:6,
    nav: false,
    dots:false,
    loop:true,
    margin:15,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
      0:{
          items:1,
      },
      600:{
          items:4,
      },
      1000:{
          items:6,
      }
  }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})