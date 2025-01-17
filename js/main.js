const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

// Клик по кнопкам с подсказками
for (let btn of infoBtns) {
	btn.addEventListener('click', function (e) {
		e.stopPropagation();

		// Hide all hint
		for (let hint of infoHints) {
			if (this.parentNode.querySelector('.info-hint') !== hint) {
				hint.classList.add('none');
			}
		}

		// Show current hint
		this.parentNode.querySelector('.info-hint').classList.toggle('none');
	});
}

// Закрываем подсказки при клике по всему документу
document.addEventListener('click', function () {
	for (let hint of infoHints) {
		hint.classList.add('none');
	}
});

// Запрещаем всплытие события клика при клике на подсказки
for (let hint of infoHints) {
	hint.addEventListener('click', (e) => e.stopPropagation());
}

// Swiper slider
const swiper = new Swiper('.swiper', {
	loop: true,
	freeMode: true,

	slidesPerView: 1,
	spaceBetween: 42,

	breakpoints: {
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		920: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1230: {
			slidesPerView: 4,
			spaceBetween: 42,
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: '#sliderNext',
		prevEl: '#sliderPrev',
	},
});



// Mobile Nav
const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('#mobile-nav');

mobileNavOpenBtn.onclick = function (){
	mobileNav.classList.add('mobile-nav-wrapper--open');
}

mobileNavCloseBtn.onclick = function () {
	mobileNav.classList.remove('mobile-nav-wrapper--open');
};
