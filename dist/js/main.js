
const body = document.querySelector('body'),
    html = document.querySelector('html'),
    header = document.querySelector('.header');

// =-=-=-=-=-=-=-=-=-=-=-=- <slider> -=-=-=-=-=-=-=-=-=-=-=-=

let introSlider = new Swiper('.intro__slider', {
  
    spaceBetween: 30,
    slidesPerView: 2,
	autoplay: {
		delay: 0,
		reverseDirection: true,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
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

window.onload = function() {
	const showElements = document.querySelectorAll('.show-element')
	showElements.forEach(showElement => {
		showElement.style.backgroundImage = showElement.dataset.image;
		delete showElement.dataset.image;
	})
}
