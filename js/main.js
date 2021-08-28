$(function () {

    $('.top__slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-arrows slick-next"><img src="img/next.svg" alt="next_arrow"></button>',
        prevArrow: '<button type="button" class="slick-arrows slick-prev"><img src="img/prev.svg" alt="prev_arrow"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {

                }
            },

            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
    $('.quote__inner').slick({
        dots: true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
       
        responsive: [
    
        ]
    });
  
});
function back(){
    let button=$('.back');
    button.on('click',(e)=>{
        e.preventDefault();
        $('html').animate({scrollTop:0},1000);
    })
}
back();