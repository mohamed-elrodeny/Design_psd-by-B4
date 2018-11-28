$(function(){
    $(".home").height($(window).height());


    $(window).scroll(function(){
        var sc = $(this).scrollTop();
        if (sc > 50){
            $('nav').addClass("sticky");
        }
        else {
            $('nav').removeClass("sticky");
        }
        if (sc > $('.statistics').offset().top - 200){
            $('.time').countTo();
        }

        if (sc > 500){
            $('.scrolltop').fadeIn();
        }else {
            $('.scrolltop').fadeOut();
        }
    })

    $(".buttons button").click(function(){
        $(this).addClass('active-btn').siblings().removeClass('active-btn');

        var cssFilter = $(this).attr('id');
        if (cssFilter === 'all'){
            $('.images > div').fadeIn();
        }else {
            $('.images > div').fadeOut();
            $('.images').contents().filter('.' + cssFilter).fadeIn();
        }
    })


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })


    $('.panel li').click(function(){

        $(this).addClass("active-btn").siblings().removeClass("active-btn")
        var p = $(this).data("role");
        $('.content > div').hide();

        $('.content').contents().filter('#' + p).fadeIn();
    })


    $('.pop').magnificPopup({
        type: 'iframe'
    });


    $('.slick').slick({
        nextArrow: false,
        prevArrow: false
    });


    $('.scrolltop').click(function(){
        $('body,html').animate({
            scrollTop : 0
        },600)
    })

    $('.nav-item a').click(function(){
        $('body,html').animate({
            scrollTop : $($(this).attr('href')).offset().top
        },1000);
    });
})