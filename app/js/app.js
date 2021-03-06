//звезданутый рейтинг
$(function () {
	$(".star").rateYo({
		starWidth: "16px",
		normalFill: "#CACACA",
		ratedFill: "#F7AF08",
		readOnly: true,
	});
});

// swiper
new Swiper(".feedback-slider", {
	// стрелки управления
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	// пагинация внизу
	// pagination: {
	// 	el: ".swiper-pagination",
	// 	type: "fraction",
	// 	renderFraction: function (currentClass, totalClass) {
	// 		return (
	// 			'Отзыв <span class=" ' +
	// 			currentClass +
	// 			'"></span>' +
	// 			" из " +
	// 			'<span class="' +
	// 			totalClass +
	// 			'" ></span>'
	// 		);
	// 	},
	// },
	// управление стрелками клавиатуры
	keyboard: {
		enabled: true,
		pageUpDown: true,
		onlyInViewport: true,
	},
	// управление колесиком мышки
	mousewheel: {
		sensitivity: 1,
		eventsTarget: ".about-carusel__item",
	},
	// автовысота по размеру слайда
	autoHeight: false,
	// количество слайдов
	slidesPerView: 3,
});

// up

$(function () {
	// при нажатии на кнопку scrollup
	$(".scrollup").click(function () {
		// переместиться в верхнюю часть страницы
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			500,
		);
	});
});
// при прокрутке окна (window)
$(window).scroll(function () {
	// если пользователь прокрутил страницу более чем на 200px
	if ($(this).scrollTop() > 200) {
		// то сделать кнопку scrollup видимой
		$(".scrollup").fadeIn();
	}
	// иначе скрыть кнопку scrollup
	else {
		$(".scrollup").fadeOut();
	}
});
