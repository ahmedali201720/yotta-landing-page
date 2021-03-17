var aboutSectionTopOffset = $("#aboutSection").offset().top;
var componentSectionTopOffset = $("#productComponent").offset().top;

$(window).scroll(() => {
    animateOnView($(".fade-section *"), aboutSectionTopOffset);
    animateOnView($("#productComponent *"), componentSectionTopOffset);
});