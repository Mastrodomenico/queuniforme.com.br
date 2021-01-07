require('slick-carousel')
import 'bootstrap/js/dist/collapse'

const isAnchor = value => typeof value === 'string' && value !== '#' && value[0] === '#'

var Navbar = {
    className: '.js-main-menu',
    itemClassName: '.nav-item',
    itemLinkClassName: '.nav-link',
    containerMobileClassName: '.navbar-collapse',
    classForShadow: 'shadow',
    defaultOffsetShadow: 50,
    init: () => {
        Navbar.container = $(Navbar.className)

        Navbar.containerMobile = $(Navbar.containerMobileClassName)
        $(document).click(() => Navbar.containerMobile.collapse('hide'))

        $(window).on('scroll', Navbar.setShadow)
        Navbar.setShadow()

        $(window).on('scroll', Navbar.setActiveNavbar)
        Navbar.setActiveNavbar()

        $(Navbar.itemLinkClassName).click(Navbar.setSmothscroll)
        $('.js-anchor').click(Navbar.setSmothscroll)
    },
    setShadow: () => {
        if ($(window).scrollTop() >= Navbar.defaultOffsetShadow) {
            Navbar.container.addClass(Navbar.classForShadow)
        } else {
            Navbar.container.removeClass(Navbar.classForShadow)
        }
    },
    setActiveNavbar: () => {
        let navbar = $(Navbar.className)
        let navbarHeight = $(navbar).height()
        let scrollPos = $(document).scrollTop() + navbarHeight + 10;
        let navbarItem = $(navbar).find(Navbar.itemClassName)
        $(navbarItem).each(function (index, el) {
            let currItem = $(el)
            let href = currItem.find(Navbar.itemLinkClassName).attr('href')
            if (isAnchor(href) && $(href).length && $(href).position().top <= scrollPos && $(href).position().top + $(href).height() > scrollPos) {
                $(navbarItem).removeClass('active')
                $(currItem).addClass('active')
            }
        })
    },
    setSmothscroll: (event) => {
        //SmothScroll
        let href = event.target.getAttribute('href')
        if (!isAnchor(href)) {
            return
        }

        let target = $(href)
        if (!target.length) {
            return
        }

        let navbarHeight = $(Navbar.className).outerHeight()
        event.preventDefault()
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - navbarHeight + 10
        }, 1000)
    }
}

