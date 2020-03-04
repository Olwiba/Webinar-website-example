// Scrolls the links on mobile devices
 
(function (window, document, $) {

    // Vars
    var $links = $('.js-links'),
        pageWidth = $(window).width(),
        centerLinkWidth = $(".js-links__link--center-link").width(),
        widthOffset = (pageWidth - centerLinkWidth) / 2,
        offset = $(".js-links__link--center-link").offset().left - widthOffset;
        

    function repositionBar() {
        $links.scrollLeft(offset);
    }

    $(document).ready(function() {
        repositionBar();
    });

})(window, document, jQuery);