$(function() {
    var header = $("header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function(){
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset){
        if( scrollOffset >= introH ) {
            header.addClass("header--fixed");
        } else {
            header.removeClass("header--fixed");
        }
    }

    /* Smoth Scroll */
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");
        $("html, body").animate({
            scrollTop: blockOffset
        }, 1000);
        $("#nav").removeClass("active");
        $("#nav_toggle").removeClass("active");
    })


    /* Menu nav toggle */

    $("#nav_toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("nav").toggleClass("active");
    });


    /* Collapse */

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');
        $this.parent().toggleClass("active");
    });


    /* Slider */

    $("[data-slider]").slick({
        infinity: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });



});
