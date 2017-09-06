$(function(){
    $('#banner-slide').css('max-height', $(window).height())
    $('#banner-slide').unslider({
        autoplay: true,
        arrows: false,
        infinite: true,
        dots: false,
        speed: 500,
        delay: 5000,
    })
    console.log($(window).height())
    console.log($(window).width())
})