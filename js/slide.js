$(document).ready(function(){
    var current = 0;
    var setIntervalid;
    
    $('.btns li').eq(current).addClass('on');

    $('#main_img .btns > li').click(function(){
        $('.btns li').removeClass('on');
        var i = $(this).index();
        move(i);
        $('.btns li').eq(i).addClass('on');
    });

    $('#main_img').on({
        mouseover:function(){
            clearInterval(setIntervalid);
        },
        mouseout:function(){
            timer();
            
            
        }

    });

    timer();
    function timer(){
        setIntervalid = setInterval(function(){
            var i = current + 1;
            if(i == 3){
                i = 0;
            };
            move(i);
            $('.btns li').removeClass('on');
            $('.btns li').eq(i).addClass('on');
        },5000);
    }

    function move(n){
        var currentEl = $('#viewer .slide').eq(current);
        var nextEl = $('#viewer .slide').eq(n);

        currentEl.css({left:'0%'}).animate({left:'-100%'},1100);
        nextEl.css({left:'100%'}).animate({left:'0%'},1100);


        current = n;
    }
         
    });