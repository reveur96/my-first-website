$(document).ready(function(){
    $('#h_choice div').hide(); // 초기값 설정 클릭하지 않은 상태에서는 안보이도록
    $('#h_choice div').eq(0).show(); // 첫번쨰 요소만 보이도록 설정
    
    $('#h_choice > ul.hchoice_mn > li').click(function(){
        var i = $(this).index();
        $('#h_choice div').hide(); // 이전에 요소를 숨기고 선택한 요소만 보이도록
        $('#h_choice div').eq(i).show();
         
    });

});