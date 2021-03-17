$(document).ready(() => {

    setTimeout(function () {
        $("#loading-overlay").fadeOut(600);
    }, 5000);


    // *******************************************************************************************************

    $("#go-up").click(function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 1000);
    })

    // *******************************************************************************************

    const sidebarToggler = $("#sidebar-toggler");
    const sidebarCloseBtn = $("#sidebar-close-btn");
    sidebarToggler.click(function () {
        openSidebar($("#sidebar"));
    });
    sidebarCloseBtn.click(function () {
        closeSidebar($("#sidebar"));
    });

    // *******************************************************************************************

    $('#newsTicker').breakingNews({
        direction: getPageDirection(),
        scrollSpeed: 2,
        borderWidth: 0,
        position: 'fixed-bottom'
    });


});
