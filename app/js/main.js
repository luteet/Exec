
const body = document.querySelector('body'),
    html = document.querySelector('html'),
    header = document.querySelector('.header');

// =-=-=-=-=-=-=-=-=-=-=-=- <slider> -=-=-=-=-=-=-=-=-=-=-=-=

const lengthSlides = document.querySelectorAll('.intro__slide').length;
let introSlider = new Swiper('.intro__slider', {
  
    spaceBetween: 30,
	slidesPerGroup: lengthSlides,
    slidesPerView: "auto",
	autoplay: {
		delay: 0,
		reverseDirection: true,
		disableOnInteraction: false,
	},
	speed: lengthSlides*2500,
	loop: true,
	loopAdditionalSlides: 2,
	//freeMode: true,
    breakpoints: {
		1185: {
			//slidesPerView: 6,
			spaceBetween: 86,
			speed: lengthSlides*3500,
		},
		1015: {
			spaceBetween: 86,
			speed: lengthSlides*3500,
		},
		890: {
			//slidesPerView: 5,
			spaceBetween: 60,
			speed: lengthSlides*3500,
		},
		650: {
			//slidesPerView: 3,
			spaceBetween: 60,
			speed: lengthSlides*3500,
		},
		425: {
			spaceBetween: 30,
			speed: lengthSlides*3500,
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
	//disable: "mobile",
	once: true,
});

// =-=-=-=-=-=-=-=-=-=-=-=- </Анимации> -=-=-=-=-=-=-=-=-=-=-=-=

window.onload = function() {
	const showWrapper = document.querySelector('.show-wrapper'),
		  showElements = document.querySelectorAll('.show-element');

	showElements.forEach(showElement => {
		showElement.style.backgroundImage = showElement.dataset.image;
		delete showElement.dataset.image;
	})

	setTimeout(() => {
		showWrapper.style.opacity = 1;
	},0)
}
