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