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

        handleJoinAction(4, 1000);

    });

    $("#sendJoinRequestBtn").click(function (e) {
        e.preventDefault();
        $("#popUpModal").modal('toggle');
        setTimeout(function () {
            handleJoinAction(2, 1200);
        }, 500);
    });

    $("#sectionJoinBtn").click(function (e) {
        e.preventDefault();
        setTimeout(function () {
            handleJoinAction(2, 1200);
        }, 500);
    });

    function handleJoinAction(shockNum, time) {

        if (getWindowSize() >= 992) {
            const contactForm = $("#contactForm");
            if (contactForm.css('display') == 'none') {
                $("#contactFormOpener").fadeOut(200);
                $(".contact-form-controlled").fadeOut(500);
                contactForm.fadeIn(500);
                $("#contactForm form").trigger('reset');
                formValid = false;
            }
            else {
                contactForm.effect("shake", { direction: "up", times: shockNum, distance: 14 }, time);
            }
        }

        else {
            const contactForm = $(".contact-us-form").first();
            window.scrollTo(0, (contactForm.offset().top) - 80)
            contactForm.effect("shake", { direction: "up", times: 5, distance: 14 }, 1200);

        }

    }

})