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
        formValid = false;
        $("#contactForm form").trigger('reset');

    });

    $("#contactFormOpener").click(function () {

        $("#contactFormOpener").fadeOut(200);
        $(".contact-form-controlled").fadeOut(500);
        $("#contactForm").fadeIn(500);
        formValid = false;
        $("#contactForm form").trigger('reset');

    });

    // *********************************************************************************************

    var formValid = false;

    $("#contactForm input").focusout(function () {

        var inputID = $(this).attr('id');
        if (inputID == 'contactName' || inputID == 'contactTopic' || inputID == 'contactDetails') {
            if (!validateText($(this).val(), 5, 255)) {
                invalidAction($(this), $(this).parent().find(".alert"));
                formValid = false;
            }
            else {
                validAction($(this), $(this).parent().find(".alert"));
                formValid = true;
            }
        }
        else if (inputID == "contactEmail") {
            if (!validateEmail($(this).val())) {
                invalidAction($(this), $(this).parent().find(".alert"));
                formValid = false;
            }
            else {
                validAction($(this), $(this).parent().find(".alert"));
                formValid = true;
            }
        }
        else if (inputID == "contactPhone") {
            if (!validatePhone($(this).val())) {
                invalidAction($(this), $(this).parent().find(".alert"));
                formValid = false;
            }
            else {
                validAction($(this), $(this).parent().find(".alert"));
                formValid = true;
            }
        }

    });

    $("#contactForm textarea").focusout(function () {
        var inputID = $(this).attr('id');
        if (inputID == 'contactDetails') {
            if (!validateText($(this).val(), 5, 255)) {
                invalidAction($(this), $(this).parent().find(".alert"));
                formValid = false;
            }
            else {
                validAction($(this), $(this).parent().find(".alert"));
                formValid = true;
            }
        }
    });

    $("#sendBtn").click(function (event) {
        if (!formValid)
            event.preventDefault();
    });

    $("#sendContactUs").click(function (event) {
        if (!formValid)
            event.preventDefault();
    });

    $("#joinBtn").click(function () {

        const contactForm = $("#contactForm");

        if (contactForm.css('display') == 'none') {
            $("#contactFormOpener").fadeOut(200);
            $(".contact-form-controlled").fadeOut(500);
            contactForm.fadeIn(500);
            $("#contactForm form").trigger('reset');
            formValid = false;
        }
        else {
            contactForm.effect("shake", { direction: "up", times: 4, distance: 14 }, 1000);
        }

    });

})