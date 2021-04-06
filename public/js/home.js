$(document).ready(() => {

    setTimeout(openModal, 1000);

    $("#closeCta").click(function () {
        closeCTA();
    });

    // ****************************************************************************************
    // Count up feature on scroll
    // ****************************************************************************************

    var statsTopOffset = $("#stats").offset().top;
    var countUpDone = false;

    $(window).scroll(() => {

        if ($(window).scrollTop() === 0) {
            $("#go-up").hide(200);
        }
        else {
            $("#go-up").show(200);
        }

        if (!countUpDone && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            $(".counter").each(function () {
                var counterElement = $(this);
                var elementValue = parseInt(counterElement.text());
                $(this).countup(elementValue);
            })
            countUpDone = true;
        }
    });

    // ***************************************************************************************************

    $("#minimizeContactForm").click(function () {

        $("#contactForm").fadeOut(500);
        $("#contactFormOpener").fadeIn(200);
        $(".contact-form-controlled").fadeIn(500);

    });

    $("#contactFormOpener").click(function () {

        $("#contactFormOpener").fadeOut(200);
        $(".contact-form-controlled").fadeOut(500);
        $("#contactForm").fadeIn(500);

    });

})