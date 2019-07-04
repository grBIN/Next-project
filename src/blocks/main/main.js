$('.slider__big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider__nav',
    adaptiveHeight: true
});

$('.slider__nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider__big',
    dots: false,
    arrows: false,
    mobileFirst: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 4
        }
        },
        {
            breakpoint: 1199,
            settings: {
            slidesToShow: 5
        }
        }
    ]
});