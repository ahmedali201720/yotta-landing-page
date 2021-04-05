$(document).ready(function () {

    $(".courses-carousel").owlCarousel({
        margin: 20,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        nav: false,
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1.2
            },
            576: {
                items: 1.8
            },
            768: {
                items: 2.5
            },
            992: {
                items: 2.75
            },
            1200: {
                items: 3.25
            }
        }
    });
});

