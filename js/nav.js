$(document).ready(function(){
    var hanguel = $('.n_menu a').find('span');
    $('.s_menu').css({display:'none'});
    $('.n_menu').hover(
        function () {
            $('.n_menu').removeClass('on');
            $(this).addClass('on');
            $(this).find('span').css({ visibility: 'visible'});
            $('.s_menu').each(function(){
                if($(this).css('display') == 'block'){
                    $(this).css({display:'none'});
                }
            })
            $(this).find('.s_menu').css({display:'block'});
        },
        function () {

            $('.n_menu').removeClass('on');
            hanguel.css({ visibility: 'hidden'}) 
            $(this).find('.s_menu').css({display:'none'});

        }
    );
 
});