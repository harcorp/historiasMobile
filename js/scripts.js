(function($) {

    $(window).on('load', function() {
        $(".loading").fadeOut();
    });

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': 'Imagen %1 de %2',
        'alwaysShowNavOnTouchDevices': true
    });
})(jQuery);