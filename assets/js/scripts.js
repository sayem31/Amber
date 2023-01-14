$(document).ready(function () {

//     //Scroll Top
//     $('.back-top a').click(function(){
//     	$('html,body').animate({
//     		ScrollTop:0
//     	}1000);
//     	return false; 
//     });

     //banner Carousel
    $('.banners').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true
    });

    //works area Carousel
    $('.works-items').owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        responsive: {

            0: {
                items: 1,
            },

            768: {
                items: 3,
            }
        }

    });

    //testimonials Carousel
    $('.testimonials').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
    });

    //knob js
    $('.pie_progress').asPieProgress({
         namespace: 'pie_progress',
             speed: 80,
    });
    $('.pie_progress').asPieProgress('start');

    //menu  bar
    $('.nav-icon').click(function () {
        $('.menu ul').slideToggle(1000);

        return false;
    });

    //Work popup
    $('.workpopup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    //grid popup
    $('.gridpopup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
        }

    });

  
   //CounterUP
    $('.item-content h1').counterUp({
        delay: 10,
        time: 2000,
    });




});


