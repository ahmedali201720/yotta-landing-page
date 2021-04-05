$(document).ready(function () {

    $(".courses-carousel").owlCarousel({
        margin: 20,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
            350: {
                items: 1.25
            },
            370: {
                items: 1.4
            },
            414: {
                items: 1.75
            },
            576: {
                items: 2.2
            },
            768: {
                items: 3
            },
            992: {
                items: 2.5
            },
            1200: {
                items: 3
            }
        }
    });
});

