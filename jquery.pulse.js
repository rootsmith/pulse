(function($){

    /**
     * A loading indicator
     *
     * Replaces the existing contents of the calling element with the given
     * text, pulses three ellipses after it.
     */
    $.fn.pulse = function(text) {
        $.fn.f = function() {
            $(this).fadeIn(function() {
                if ($(this).hasClass('tail')) {
                    $(this).hide().siblings().hide();
                    return;
                }
                $(this).next().f();
            });
            return this;
        };
        var e = ' <span class="ellipse" style="display: none;">.</span> ';
        $(this).html(text + e + e + e);
        var fe = $(this).children('.ellipse').first();
        $(this).children('.ellipse').last().addClass('tail');
        return setInterval(function(){fe.f();}, 750);
    };

})(jQuery);
