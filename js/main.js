 //헤더가 위에서부터 얼마 떨어져있나?
var headerTop=$("header").offset().top;
//console.log('헤더가 위에서부터 떨어져있는 거리는? '+headerTop)
var headerH=$("header").height();
console.log('헤더의 높이는? '+headerH);

var headerAll=headerTop+headerH;

//스크롤 된 거리
$(window).scroll(function(){
    var scroll=$(window).scrollTop();
    console.log('현재 스크롤 된 거리는? '+scroll);

    if(headerAll < scroll){
        $(".scroll_nav").slideDown(300);
        
    } else { 
        $(".scroll_nav").fadeOut();
    }
});

$(".tab_content div:gt(0)").hide();

$(".tab li").click(function(e){
    e.preventDefault();
    var nn=$(this).index(); //몇번째 li를 클릭한 건지 알아내 변수에 넣는다(0부터 시작)
    console.log(nn+"번째 a를 클릭했습니다");

    $(".tab li").removeClass("on");
    $(this).addClass("on");

    $(".tab_content div").hide();
    $(".tab_content div").eq(nn).show();
});