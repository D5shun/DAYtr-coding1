$(function() {
    
    // // 　ヘッダナブバーのsection別にスタイル変更　
    var set = 300;
    var boxTop = new Array;
    var current = -1;
    // 各要素の位置
    $('section').each(function(i){
        boxTop[i] = $(this).offset().top;
    });
    // 最初の要素にclass="on"をつける
    changeBox(0);
    // スクロールした時の処理
    $(window).scroll(function(){
        scrollPosition = $(window).scrollTop();
        for (var i = boxTop.length - 1 ; i >= 0; i--) {
            if ($(window).scrollTop() > boxTop[i] - set) {
                changeBox(i);
                break;
            }
        };
    });
    function changeBox(secNum) {
        if (secNum != current) {
            current = secNum;
            secNum2 = secNum + 1;
            $('.navbar__list li a').removeClass('current');
            $('.navbar__list li:nth-child(' + secNum2 +') a').addClass('current');
        }
    };
    $(window).on("scroll", function($) {
        if (jQuery(this).scrollTop() > 100) {
          jQuery('#pageTop').fadeIn();
        } else {
          jQuery('#pageTop').fadeOut();
        }
      });
    

    // 　スライダー　
    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            reverseDirection: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
        pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            
      });

    //　WOW　
    new WOW().init();

    //　hiraku(ドロワー)　
    $(".offcanvas-right").hiraku({
        btn:"#offcanvas-btn-right",
        direction:"right"
    });

    //　pageTopボタン　
    $(window).on("scroll", function($) {
        if (jQuery(this).scrollTop() > 100) {
          jQuery('#pageTop').fadeIn();
        } else {
          jQuery('#pageTop').fadeOut();
        }
      });

    //　スムーススクロール　
    $('#pageTop').click(function(){
        $('body, html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    var card =$('#card').offset().top;
    var news =$('#news').offset().top;
    var price =$('#price').offset().top;
    var access =$('#access').offset().top;
    var contact =$('#contact').offset().top;

    $('.mainvisual__btn').click(function(){
        $('body, html').animate({
            scrollTop: contact
        }, 500);
        return false;
    });
    $('.navbar__list li:first-of-type, .footer__nav-list li:first-of-type').click(function(){
        $('body, html').animate({
            scrollTop: card
        }, 500);
        return false;
    });
    $('.navbar__list li:nth-of-type(2), .footer__nav-list li:nth-of-type(2)').click(function(){
        $('body, html').animate({
            scrollTop: news
        }, 500);
        return false;
    });
    $('.navbar__list li:nth-of-type(3), .footer__nav-list li:nth-of-type(3)').click(function(){
        $('body, html').animate({
            scrollTop: price
        }, 500);
        return false;
    });
    $('.navbar__list li:nth-of-type(4), .footer__nav-list li:nth-of-type(4)').click(function(){
        $('body, html').animate({
            scrollTop: access
        }, 500);
        return false;
    });
    $('.navbar__list li:last-of-type, .footer__nav-list li:last-of-type').click(function(){
        $('body, html').animate({
            scrollTop: contact
        }, 500);
        return false;
    });

    // //　ページ内リンクでクリックした要素に対して下線を引いたままにする　
    $('.navbar__list li a').on('click', function() {
        $('.navbar__list li a').removeClass('current');
        $(this).addClass('current');
      });

    // 　アコーディオン　
    $('.qa__list li div.question').on('click', function() {
        $(this).next().slideToggle(500);

        if($(this).find('i').is('.fa-plus')) {
            $(this).find('i').removeClass('fa-plus').addClass('fa fa-minus');
        } else {
            $(this).find('i').removeClass('fa-minus').addClass('fa fa-plus');
        }
        return false;
    });

    // 　アコーディオン　
    $('.js-modal-open').on('click',function(){
        $('.js-modal').fadeIn();
        return false;
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
});