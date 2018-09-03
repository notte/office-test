$(function() {


    if ($(window).width() < 768) {
        $('.swiper-button-next').removeClass('swiper-button-white')
        $('.swiper-button-prev').removeClass('swiper-button-white')

    }



    $(window).resize(function() {
        if ($(window).width() > 1024) {
            $('.swiper-button-next').removeClass('swiper-button-white')
            $('.swiper-button-prev').removeClass('swiper-button-white')
            $('.swiper-button-next').addClass('swiper-button-white')
            $('.swiper-button-prev').addClass('swiper-button-white')

        } else {;
            $('.swiper-button-next').removeClass('swiper-button-white')
            $('.swiper-button-prev').removeClass('swiper-button-white')
        }
    });


    $(window).resize(function() {
        if ($(window).width() > 768) {
            $("#rwd-burger").css("display", "none");
            $("#rwd-header").css("display", "block");

        } else {
            $("#rwd-header").css("display", "none");
            $("#rwd-burger").css("display", "block");
        }
    });


    $(window).resize(function() {
        if ($(window).width() > 768) {
            $("#rwd-burger").css("display", "none");
            $("#rwd-header").css("display", "block");
            $('.swiper-button-next').removeClass('swiper-button-white')
            $('.swiper-button-prev').removeClass('swiper-button-white')
            $('.swiper-button-next').addClass('swiper-button-white')
            $('.swiper-button-prev').addClass('swiper-button-white')

        } else {
            $("#rwd-header").css("display", "none");
            $("#rwd-burger").css("display", "block");
            $('.swiper-button-next').removeClass('swiper-button-white')
            $('.swiper-button-prev').removeClass('swiper-button-white')
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