require('slick-carousel')
require('bootstrap/js/dist/collapse')
require('./navbar')
require('./contactform')

$(document).ready(() => {
    $('.product__item__gallery').slick({
        dots: true,
        infinite: true,
        arrows: false
    })

    $('.testimony__list').slick({
        dots: true,
        infinite: true,
        arrows: false,
        mobileFirst: true,
        responsive: [{
            breakpoint: 767,
            settings:{
                arrows: true
            }
        }]
    })
})