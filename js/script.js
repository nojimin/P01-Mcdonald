// 헤더 gnb
$('.h_gnb .depth1 > li').mouseover(function(){
    $('.h_menu .depth2').css('display', 'block');
    $('.line').css('display', 'block');
    $(this).addClass('open');
}).mouseout(function(){
    $(this).removeClass('open');
});

$('#header').mouseleave(function(){
    $('.h_menu .depth2').css('display', 'none');
    $('.line').css('display', 'none');
})

// 헤더 검색창 오픈
$('.h_search').click(function(){
    $('.bg_src').css('display', 'block');
    $('.src_wrap').css('display', 'block');
    $('body').css('overflow', 'hidden');
})

// 헤더 검색창 닫기
$('.src_close').click(function(){
    $('.bg_src').css('display', 'none');
    $('.src_wrap').css('display', 'none');
    $('body').css('overflow', 'visible');
})

// 브라우저 스크롤이 이동할 때
// aside 위치 고정
$(window).scroll(function(){
    let sct = $(window).scrollTop();
    let ftTop = $(document).height() - $(window).height() - 350;
    if(sct >= ftTop){
        $('.aside').addClass('B');
    } else {
        $('.aside').removeClass('B');
    };

    // top버튼
    $('.btn_top').click(function(){
        $('html, body').stop().animate({
            scrollTop : 0
        });
    })
})

// 배너 슬라이더
$('.main_slide_in').slick({
    prevArrow : '.ms_left',
    nextArrow : '.ms_right',
});

// 슬라이더 버튼
$('.ms_play button').click(function(){
    $('.progressBarGauge').addClass('on');
    $('.ms_play').hide();
    $('.ms_pause').show();
});

$('.ms_pause button').click(function(){
    $('.progressBarGauge').removeClass('on');
    $('.ms_pause').hide();
    $('.ms_play').show();
});

// 타이머 바
setInterval(function guage(){
    let width = $('.progressBar').css('width');
    let gaugeW = $('.progressBarGauge').css('width');
    if(width == gaugeW){
        $('.main_slide_in').slick('slickNext');
    }
})
function restartAnimation(){
    const target = $('.progressBarGauge');
    
    $(target).removeClass('on');
    void target.outerWidth();
    $(target).addClass('on');
}
$('.slick-arrow').click(function(){
    if($('.progressBarGauge').hasClass('on')){
        restartAnimation();
    }
});

// 메뉴 슬라이드
$('.pm_menu .depth2').slick({
    variableWidth: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4
});

// 메뉴 활성화
$('.pm_menu a').click(function(e){
    e.preventDefault();
    let dis = $(this).siblings('.depth2').css('display');
    if(dis == 'none'){
        $('.pm_menu > ul > li').removeClass('active');
        $(this).parents('li').addClass('active');
    };
});

// 이벤트 슬라이드
$('.evt_item ul').slick({
    variableWidth: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow : '.evt_left',
    nextArrow : '.evt_right',
});