$(document).ready(function () {
    //blog Carousel
    $('.single-right-work').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
    });

    //blog Carousel
    $('.crousel-items').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText:['<i class="fa fa-chevron-left"></i>',
            '<i class="fa fa-chevron-right"></i>'],
        dots: false,
        autoplay: true,
    });
    
    //blog Carousel
    $('.crousel-right-items').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText:['<i class="fa fa-chevron-left"></i>',
            '<i class="fa fa-chevron-right"></i>'],
        dots: false,
        autoplay: true,
    });

});
