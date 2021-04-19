
function getWindowSize() {
    return $(window).width()
}

function getLang() {
    return $('html').attr('lang');
}

function getPageDirection() {
    let lang = getLang();
    return lang = 'ar' ? 'rtl' : 'ltr';
}

function openSidebar(sidebar) {

    if (getWindowSize() <= 576) {
        sidebar.animate({
            width: '100vw'
        }, 600, function () {
            $(".sidebar-header").fadeIn(300)
            setTimeout(function () {
                $(".sidebar-body").fadeIn(300)
            }, 400)
        })
    }
    else if (getWindowSize() > 576 && getWindowSize() <= 768) {
        sidebar.animate({
            width: '75vw'
        }, 600, function () {
            $(".sidebar-header").fadeIn(300)
            setTimeout(function () {
                $(".sidebar-body").fadeIn(300)
            }, 400)
        })
    }
    else if (getWindowSize() > 768 && getWindowSize() <= 992) {
        sidebar.animate({
            width: '40vw'
        }, 600, function () {
            $(".sidebar-header").fadeIn(300)
            setTimeout(function () {
                $(".sidebar-body").fadeIn(300)
            }, 400)
        })
    }
    else if (getWindowSize() > 992 && getWindowSize() <= 1200) {
        sidebar.animate({
            width: '30vw'
        }, 600, function () {
            $(".sidebar-header").fadeIn(300)
            setTimeout(function () {
                $(".sidebar-body").fadeIn(300)
            }, 400)
        })
    }
    else if (getWindowSize() > 1200) {
        sidebar.animate({
            width: '20vw'
        }, 600, function () {
            $(".sidebar-header").fadeIn(300)
            setTimeout(function () {
                $(".sidebar-body").fadeIn(300)
            }, 400)
        })
    }

}

function closeSidebar(sidebar) {
    $(".sidebar-body").fadeOut(300)
    setTimeout(function () {
        $(".sidebar-header").fadeOut(300)
    }, 700)
    setTimeout(function () {
        sidebar.animate({
            width: '0'
        }, 700)
    })
}

function animateOnView(animatableElment, offset) {
    if (window.pageYOffset > offset - $(window).height()) {
        $(animatableElment).addClass("fade-in-class");
    }
}

function openModal() {
    $("#popUpModal").modal('toggle');
}

function closeCTA() {
    $("#fixedHeader").fadeOut(700);
}

//*******************************************************************************************

function validateText(text, min, max) {
    if (text.trim() && text.length >= min && text.length <= max) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    }
    else {
        return true;
    }
}

function validatePhone(phone) {
    var regex = /^[0-9]{11}$/;
    if (!regex.test(phone)) {
        return false;
    }
    else {
        return true;
    }
}

function validAction(input, alert) {
    alert.fadeOut(100);
    input.addClass("border-success");
}

function invalidAction(input, alert) {
    alert.fadeIn(100);
    input.removeClass("border-success");
}

function focusFirstElement(element) {
    element.focus();
}
