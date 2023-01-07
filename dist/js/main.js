
const body = document.querySelector('body'),
    html = document.querySelector('html'),
    menu = document.querySelectorAll('.header__burger, .header__nav, body'),
    burger = document.querySelector('.header__burger'),
    header = document.querySelector('.header');


body.addEventListener('click', function (event) {

    function $(elem) {
      return event.target.closest(elem)
    }

    // =-=-=-=-=-=-=-=-=-=- <Бургер в шапке> -=-=-=-=-=-=-=-=-=-=-

    // =-=-=-=-=-=-=-=-=-=- </Бургер в шапке> -=-=-=-=-=-=-=-=-=-=-

})


// =-=-=-=-=-=-=-=-=-=-=-=- <slider> -=-=-=-=-=-=-=-=-=-=-=-=

let introSlider = new Swiper('.intro__slider', {
  
    spaceBetween: 30,
    slidesPerView: 2,

		autoplay: {
			delay: 0,
			reverseDirection: true,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
			//waitForTransition: false,
		},
		speed: 3000,
		loop: true,
		loopAdditionalSlides: 2,
		freeMode: true,
    breakpoints: {
      1185: {
        slidesPerView: 6,
      },
			1015: {
				spaceBetween: 86,
			},
			890: {
				slidesPerView: 5,
				spaceBetween: 60,
			},
			650: {
				slidesPerView: 3,
				spaceBetween: 60,
			},
			425: {
				spaceBetween: 30,
			}
      /* 600: {
        slidesPerView: 2,
        centeredSlides: false,
      }, */
    }
}); 

// =-=-=-=-=-=-=-=-=-=-=-=- </slider> -=-=-=-=-=-=-=-=-=-=-=-=

// =-=-=-=-=-=-=-=-=-=-=-=- <resize> -=-=-=-=-=-=-=-=-=-=-=-=

let windowSize;

function resize() {

	windowSize = window.innerWidth
	html.style.setProperty('--height-header', header.offsetHeight + 'px')

}

resize();

window.onresize = resize;

// =-=-=-=-=-=-=-=-=-=-=-=- </resize> -=-=-=-=-=-=-=-=-=-=-=-=


// =-=-=-=-=-=-=-=-=-=-=-=- <Анимации> -=-=-=-=-=-=-=-=-=-=-=-=

AOS.init({
	disable: "mobile"
});

// =-=-=-=-=-=-=-=-=-=-=-=- </Анимации> -=-=-=-=-=-=-=-=-=-=-=-=


