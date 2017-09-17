$(function(){
    // $('#banner-slide').css('max-height', $(window).height())
    // $('#banner1').attr('src', 'http://xingu-1251622208.picsh.myqcloud.com/banner/banner1.jpg?imageView2/1/w/'+$(window).width()+'/h/'+$(window).height())
    // $('#banner2').attr('src', 'http://xingu-1251622208.picsh.myqcloud.com/banner/banner2.jpg?imageView2/1/w/'+$(window).width()+'/h/'+$(window).height())
    // $('#banner3').attr('src', 'http://xingu-1251622208.picsh.myqcloud.com/banner/banner3.jpg?imageView2/1/w/'+$(window).width()+'/h/'+$(window).height())
    // $('#banner4').attr('src', 'http://xingu-1251622208.picsh.myqcloud.com/banner/banner4.jpg?imageView2/1/w/'+$(window).width()+'/h/'+$(window).height())
    
    
    // $('#banner-slide').unslider({
    //     autoplay: true,
    //     arrows: false,
    //     infinite: true,
    //     dots: false,
    //     speed: 500,
    //     delay: 5000,
    // })

    // console.log($('#title').height())
    // console.log($(window).width())
    $('#title').css('margin-left', -($('#title').width()/2))
    $('#title').css('margin-top', -($('#title').height()/2))

    $('#fullpage').fullpage({
        slidesNavigation: false,
        lazyloading: true,
        controlArrows: false,
        continuousHorizontal: true,
        loopHorizontal: true,
        // verticalCentered: true,
        scrollOverflow: true,
    })

    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        // layoutMode: 'fitRows',
        percentPostion: true,
        masonry: {
            columnWidth: '.grid-sizer'
        }
    })
    $grid.imagesLoaded().progress(function(){
        $grid.isotope('layout')
    })

    setInterval(function(){
        $.fn.fullpage.moveSlideRight()
    }, 3000)
})