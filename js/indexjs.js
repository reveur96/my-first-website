$(document).ready(function () {
    //프랜차이즈
    $('.frnc_btn a').hover(
        function () {
            $(this).addClass('on');
        },
        function () {
            $(this).removeClass('on');
        });


    //holly choice 메뉴
    $('.mn_title').find('.mn_sub').hide();
    $('.mn_title h3').click(
        function () {
            $('.mn_sub').hide();
            // $(this).addClass('on');
            $(this).next('.mn_sub').show();
        });

    //커피아카데미
    $('#academy_in a').hover(
        function () {
            $(this).addClass('on');
        },
        function () {
            $(this).removeClass('on');
        });


});


//우측 퀵메뉴
$(function () {
    var menu = $('.menu > li');
    var contents = $('#contents > div');

    $(window).scroll(function () {
        var sct = $(window).scrollTop();

        contents.each(function () {
            var tg = $(this)
            var i = tg.index();

            if (tg.offset().top <= sct) {
                menu.removeClass('on');
                menu.eq(i).addClass('on');
            };
        });

        var scrTop = sct + 400;
        $('#right_mn').stop().animate({ top: scrTop }, 400);
    })
});