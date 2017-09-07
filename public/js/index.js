$(function(){
    // $('#banner-slide').css('max-height', $(window).height())
    $('#banner1').attr('src', $('#banner1')[0].src+'?imageView2/1/w/'+$(window).width()+'/h/'+$(window).height())
    $('#banner2').attr('src', $('#banner2')[0].src+'?imageView2/1/w/'+$(window).width()+'/h/'+$(window).height())
    $('#banner3').attr('src', $('#banner3')[0].src+'?imageView2/1/w/'+$(window).width()+'/h/'+$(window).height())
    $('#banner4').attr('src', $('#banner4')[0].src+'?imageView2/1/w/'+$(window).width()+'/h/'+$(window).height())
    
    $('#banner-slide').unslider({
        autoplay: true,
        arrows: false,
        infinite: true,
        dots: false,
        speed: 500,
        delay: 5000,
    })

    // console.log($(window).height())
    // console.log($(window).width())
})