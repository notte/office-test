$(function() {


    $(window).resize(function() {
        if ($(window).width() > 768) {
            $("#rwd-burger").css("display", "none");
            $("#rwd-header").css("display", "block");

        } else {
            $("#rwd-header").css("display", "none");
            $("#rwd-burger").css("display", "block");
        }
    });


    $("#Ham").click(function() {
        $("#rwd-header").show(200);
        $("body").css("overflow", "hidden");
        $(".rwd-burger").css('display', 'none');
    });

    $("#Ham_close").click(function() {
        $("#rwd-header").hide(200);
        $("body").css("overflow", "auto");
        $(".rwd-burger").css('display', 'block');
    });



    $('.header-btn').click(function() {

        if ($(window).width() < 769) {

            $('#rwd-header').css('display', 'none');
            $('header').removeClass('header-move');
            $("body").css("overflow", "auto");
        }

    });




});