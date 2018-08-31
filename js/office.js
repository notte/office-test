$(function() {


    // header欄位控制
    $(window).scroll(function() {


        if ($('header').offset().top > 100) {

            $('header').addClass('header-move');

        } else {

            $('header').removeClass('header-move');
        }

    })



    // Unique事件開始

    // icon消失，文字出現
    $('.OfferIcon').mouseenter(function() {

        $(this).siblings('.OfferItem').show();
        $(this).hide();

    });

    // 文字消失，icon出現
    $('.OfferItem').mouseleave(function() {

        $(this).siblings('.OfferIcon').show();
        $(this).hide();

    });

    // Unique事件結束


    // header button滑動
    $('.header-btn').click(function() {

        var i = $(this).attr('href').substr(1);

        $('html,body').animate(

            { scrollTop: $('#' + i).offset().top }

            , 800


        );

    });

});


