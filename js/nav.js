$(document).ready(function(){
    var hanguel = $('.n_menu a').find('span');
    $('.n_menu a').hover(
        function () {

            $(this).addClass('on');
            $(this).find('span').css({ visibility: 'visible'});
        },
        function () {
            if(hanguel.css('visibility') == 'visible'){ 
                $('.n_menu a').removeClass('on');
                hanguel.css({ visibility: 'hidden'})
            };
            // $('.n_menu a').removeClass('on');
            // $(this).find('span').css({ visibility: 'hidden'})
        }
    );
    
    $('.s_menu').css({display:'none'});

    $('.n_menu > a').hover(function(){
        $('.s_menu').each(function(){
            if($(this).css('display') == 'block'){
                $(this).css({display:'none'});
            }
        })

        $(this).next('.s_menu').css({display:'block'});
      });
    

    $('.s_menu').mouseleave(function () {
        $(this).css({display:'none'});
        $('.n_menu a').removeClass('on');
        $('.n_menu a').find('span').css({ visibility: 'hidden'});
    });
});