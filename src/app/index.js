window.$ = window.jQuery = require('jquery');
var objectFitImages = require('object-fit-images');
require('bootstrap')
import 'slick-carousel'
// import 'bootstrap.min.js'
// import './jquery.mCustomScrollbar.js'
// import './device'


$(document).ready(() => {
	//Variables
	let time = 2;
	let bar,
		slick,
		isPause,
		tick,
		percentTime;

	//Scrolling
	// (function ($) {
	// 	$(window).on("load", function () {
	// 		$(".js-desktop").mCustomScrollbar();
	// 	});
	// })(jQuery);

	//object-fit and object-position fot IE
	$(function () { objectFitImages() });



	// Load bar
	slick = $('.js-prime__slider');
	slick.slick({
		pauseOnHover: true,
		autoplay: true,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><svg class="icon icon-arrow-big-l">\n' +
			'                <use xlink:href="#icon-arrow-big-l"></use>\n' +
			'            </svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg class="icon icon-arrow-big-r">\n' +
			'                <use xlink:href="#icon-arrow-big-r"></use>\n' +
			'            </svg></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
				}
			},
		]
	});

	bar = $('.js-prime__fill');

	$('.prime').on({
		mouseenter: function() {
			isPause = true;
		},
		mouseleave: function() {
			isPause = false;
		}
	})

	function startProgressbar() {
		resetProgressbar();
		percentTime = 0;
		isPause = false;
		tick = setInterval(interval, 10);
	}

	function interval() {
		if(isPause === false) {
			percentTime += 1 / (time+0.1);
			bar.css({
				width: percentTime+"%"
			});
			if(percentTime >= 100)
			{
				slick.slick('slickNext');
				startProgressbar();
			}
		}
	}

	function resetProgressbar() {
		bar.css({
			width: 0+'%'
		});
		clearTimeout(tick);
	}

	startProgressbar();


	//Fixed menu
	function fixed_menu() {
		if ($(window).scrollTop() > 0) {
			$('.js-header').addClass('fixed');
			$('.js-main').addClass('is-fixed');
			// $('.js-search__results').addClass('fixed__results');

		} else {
			$('.js-header').removeClass('fixed');
			$('.js-main').removeClass('is-fixed');
			// $('.js-search__results').removeClass('fixed__results');
			// $('.js-navigation__list__wrapper').css('display', '')
			// tabletMenuButton.removeClass('open')
		}
	}

	fixed_menu();
	$(window).scroll(function () {
		fixed_menu();
	});


	//Spinner
	let stepSlider = $('.steps__slider');
	let spinnerItem = $('.steps__spinner-item')
	stepSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {

		let spinner = [
			$('.steps__spinner-first'),
			$('.steps__spinner-second'),
			$('.steps__spinner-third'),
			$('.steps__spinner-fourth'),
			$('.steps__spinner-fifth'),
			$('.steps__spinner-sixth'),
		]


		switch (nextSlide) {
			case (0):
				spinner[0].addClass('active-spinner');
				spinner[1].removeClass('active-spinner')
				spinner[2].removeClass('active-spinner')
				spinner[3].removeClass('active-spinner')
				spinner[4].removeClass('active-spinner')
				spinner[5].removeClass('active-spinner')
				break;
			case (1):
				spinner[0].addClass('active-spinner');
				spinner[1].addClass('active-spinner');
				spinner[2].removeClass('active-spinner')
				spinner[3].removeClass('active-spinner')
				spinner[4].removeClass('active-spinner')
				spinner[5].removeClass('active-spinner')
				break;
			case (2):
				spinner[0].addClass('active-spinner');
				spinner[1].addClass('active-spinner');
				spinner[2].addClass('active-spinner');
				spinner[3].removeClass('active-spinner')
				spinner[4].removeClass('active-spinner')
				spinner[5].removeClass('active-spinner')
				break;
			case (3):
				spinner[0].addClass('active-spinner');
				spinner[1].addClass('active-spinner');
				spinner[2].addClass('active-spinner');
				spinner[3].addClass('active-spinner');
				spinner[4].removeClass('active-spinner')
				spinner[5].removeClass('active-spinner')
				break;
			case (4):
				spinner[0].addClass('active-spinner');
				spinner[1].addClass('active-spinner');
				spinner[2].addClass('active-spinner');
				spinner[3].addClass('active-spinner');
				spinner[4].addClass('active-spinner');
				spinner[5].removeClass('active-spinner')
				break;
			case (5):
				spinner[0].addClass('active-spinner');
				spinner[1].addClass('active-spinner');
				spinner[2].addClass('active-spinner');
				spinner[3].addClass('active-spinner');
				spinner[4].addClass('active-spinner');
				spinner[5].addClass('active-spinner');
		}
	});

	//Slick slider in steps section
	stepSlider.slick({
		autoplay: true,
		dots: false,
		arrows: true,
		fade: true,
		infinite: true,
		// speed: 500,
		// fade: true,
		// cssEase: 'linear',
		speed: 900,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><svg class="icon icon-arrow-big-l">\n' +
			'                <use xlink:href="#icon-arrow-big-l"></use>\n' +
			'            </svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg class="icon icon-arrow-big-r">\n' +
			'                <use xlink:href="#icon-arrow-big-r"></use>\n' +
			'            </svg></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true
				}
			},
		]
	});

	//Slick slider in partners section
	$('.partners__slider').slick({
		autoplay: false,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 900,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><svg class="icon icon-arrow-big-l">\n' +
			'                <use xlink:href="#icon-arrow-big-l"></use>\n' +
			'            </svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg class="icon icon-arrow-big-r">\n' +
			'                <use xlink:href="#icon-arrow-big-r"></use>\n' +
			'            </svg></button>',
		responsive: [
			{
				breakpoint: 1410,
				settings: {
					slidesToShow: 3,
					// slidesToScroll: 1,
					// arrows: false,
					// dots: true
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					// slidesToScroll: 1,
					// arrows: false,
					// dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true
				}
			},
		]
	});

	//Slick slider in products-detail page
	$('.js-cases-pg__slider').slick({
		autoplay: false,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 900,
		// slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><svg class="icon icon-arrow-big-l">\n' +
			'                <use xlink:href="#icon-arrow-big-l"></use>\n' +
			'            </svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg class="icon icon-arrow-big-r">\n' +
			'                <use xlink:href="#icon-arrow-big-r"></use>\n' +
			'            </svg></button>',
		responsive: [
			{
				breakpoint: 1410,
				settings: {
					// slidesToShow: 1,
					// slidesToScroll: 1,
					// arrows: false,
					// dots: true
				}
			},
			{
				breakpoint: 1024,
				settings: {
					// slidesToShow: 1,
					// slidesToScroll: 1,
					// arrows: false,
					// dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true
				}
			},
		]
	});

	//Input placeholders
	let inputWrapper = $('.js-material-input');

	inputWrapper.each(function () {
		if ($(this).find('input,textarea').val()) {
			$(this).addClass('active');
		} else {
			$(this).removeClass('active');
		}
	});
	inputWrapper.find('input,textarea').focusin(function () {
		$(this).closest('.js-material-input').addClass('focus');
	});
	inputWrapper.find('input,textarea').focusout(function () {
		$(this).closest('.js-material-input').removeClass('focus');
	})
	inputWrapper.find('input,textarea').change(function () {
		if ($(this).val()) {
			$(this).closest('.js-material-input').addClass('active');
		} else {
			$(this).closest('.js-material-input').removeClass('active');
		}
	});

	//reCaptcha

	//Mobile menu toggle
	$('.js-header__menu-open').click(function () {
		$('body').toggleClass('scroll-hidden');
		$(this).toggleClass('open');
		$('.js-mobile').slideToggle()
	});

	//Desktop menu toggle
	$('.js-header__desktop-open').click(function () {
		$('body').toggleClass('scroll-hidden');
		$(this).toggleClass('open');
		$('.js-desktop').slideToggle()
	});

	//Mobile menu submenu services toggle
	$('.js-mobile__menu-services-button').click(() => {
		$('.js-mobile__menu-sub-list-services').slideToggle();
		$('.js-mobile__menu-services-button').closest('.mobile__menu-item').toggleClass('mobile__menu-item--open')
	})

	//Mobile menu submenu products toggle
	$('.js-mobile__menu-products-button').click(() => {
		$('.js-mobile__menu-sub-list-products').slideToggle();
		$('.js-mobile__menu-products-button').closest('.mobile__menu-item').toggleClass('mobile__menu-item--open')
	})

	//Products-detail page compare block
	$('.js-compare__list-link').click(function () {
		$('.js-compare__list-link').removeClass('compare__list-link--active')
		$(this).addClass('compare__list-link--active')

		if ($('.js-compare__list-signature').hasClass('compare__list-link--active')) {
			$('.js-compare__signature-wrapper').slideDown()
		} else {
			$('.js-compare__signature-wrapper').slideUp()
		}
	})

	// $('.js-compare__list-signature').click(function () {
	// 	// $(this).addClass('compare__list-signature--active')
	// 	$('.js-compare__signature-wrapper').slideDown()
	// })






	//Vacancies page menu
	let analyticsButton = $('.js-vacancies__menu-analytics')
	let itButton = $('.js-vacancies__menu-it')
	let startButton = $('.js-vacancies__menu-start')

	let analyticsBlock = $('.js-vacancies__analytics')
	let itBlock = $('.js-vacancies__it')
	let startBlock = $('.js-vacancies__start')

	analyticsButton.click(function () {
		$(this).addClass('vacancies__menu-item--active')
		itButton.removeClass('vacancies__menu-item--active')
		startButton.removeClass('vacancies__menu-item--active')

		// analyticsBlock.addClass('vacancies__sub--active')
		// itBlock.removeClass('vacancies__sub--active')
		// startBlock.removeClass('vacancies__sub--active')

		analyticsBlock.slideDown()
		itBlock.slideUp()
		startBlock.slideUp()
	})

	itButton.click(function () {
		$(this).addClass('vacancies__menu-item--active')
		startButton.removeClass('vacancies__menu-item--active')
		analyticsButton.removeClass('vacancies__menu-item--active')

		// analyticsBlock.removeClass('vacancies__sub--active')
		// itBlock.addClass('vacancies__sub--active')
		// startBlock.removeClass('vacancies__sub--active')

		analyticsBlock.slideUp()
		itBlock.slideDown()
		startBlock.slideUp()
	})

	startButton.click(function () {
		$(this).addClass('vacancies__menu-item--active')
		analyticsButton.removeClass('vacancies__menu-item--active')
		itButton.removeClass('vacancies__menu-item--active')

		// analyticsBlock.removeClass('vacancies__sub--active')
		// itBlock.removeClass('vacancies__sub--active')
		// startBlock.addClass('vacancies__sub--active')

		analyticsBlock.slideUp()
		itBlock.slideUp()
		startBlock.slideDown()
	})

	//Yandex map
	$(function () {
		if ($('#map').length) {
			var markers = [
				[54.942092, 37.405220],
				[54.974596, 37.445918],
				[55.843894, 38.731038]
			]
			var mapHeight = $('#map').height();

			ymaps.ready(function () {

				var map = new ymaps.Map("map", {
						center: [54.942092, 37.405220],
						zoom: 6,
						behaviors: ['default'],
						controls: []
					}),
					MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
						'<span class="map__icon-font">{{ properties.geoObjects.length }}</span>'
					),
					clusterer = new ymaps.Clusterer({
						clusterIcons: [
							{
								href: 'images/mark-cell.svg',
								size: [67, 73],
								offset: [-25, -60],
								iconContentOffset: [23, 15],
							},
							{
								href: 'images/mark-cell.svg',
								size: [55, 60],
								offset: [-33.5, -73],
								iconContentOffset: [25, 25],
							}],
						clusterNumbers: [100],
						clusterIconContentLayout: MyIconContentLayout
					});


				var MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
					'<div class="popover">' +
					'<div class="popover__arrow"></div>' +
					'<div class="popover__inner">' +
					'<a class="popover__close" href="#">' +
					'<svg class="popover__close-svg icon icon-close-middle"><use xlink:href="#icon-close-middle"></use></svg>' +
					'</a>' +
					'$[[options.contentLayout observeSize minWidth=300 maxWidth=470]]' +
					'<span class="popover__tail"></span>' +
					'</div>' +
					'</div>'
					, {
						build: function () {
							this.constructor.superclass.build.call(this);

							this._$element = $('.popover', this.getParentElement());

							this.applyElementOffset();

							this._$element.find('.popover__close')
								.on('click', $.proxy(this.onCloseClick, this));
						},
						clear: function () {
							this._$element.find('.popover__close')
								.off('click');

							this.constructor.superclass.clear.call(this);
						},
						onSublayoutSizeChange: function () {
							MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

							if (!this._isElement(this._$element)) {
								return;
							}

							this.applyElementOffset();

							this.events.fire('shapechange');
						},
						applyElementOffset: function () {
							this._$element.css({
								left: -(this._$element[0].offsetWidth / 2),
								top: -(this._$element[0].offsetHeight + this._$element.find('.popover__arrow')[0].offsetHeight)
							});
						},
						onCloseClick: function (e) {
							e.preventDefault();

							this.events.fire('userclose');
						},
						getShape: function () {
							if (!this._isElement(this._$element)) {
								return MyBalloonLayout.superclass.getShape.call(this);
							}

							var position = this._$element.position();

							return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
								[position.left, position.top], [
									position.left + this._$element[0].offsetWidth,
									position.top + this._$element[0].offsetHeight + this._$element.find('.popover__arrow')[0].offsetHeight
								]
							]));
						},
						_isElement: function (element) {
							return element && element[0] && element.find('.popover__arrow')[0];
						}
					});

				var MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
					'<div class="popover__content">$[properties.balloonContent]</div>'
				);

				map.behaviors.disable(['scrollZoom']);

				let geoObjects = [];

				for (var i = 0; i < markers.length; i++) {
					var marker = markers[i];
					var balloon =
						'<div class="balloon">' +
						'<div class="balloon__header">' +
						'<div class="balloon__title">' +
						'<a class="balloon__title-link" href="#">Внедрение “1C:ERP управление предприятием 2.4”</a>' +
						'</div>' +
						'</div>' +
						'<div class="balloon__body">' +
						'<div class="balloon__image-wrapper">' +
						'<img src="images/partners_logo_1.png" alt="" class="balloon__image">' +
						'</div>' +
						'<div class="balloon__description">' +
						'<div class="balloon__description-client">' +
						'<span class="balloon__description-column">Клиент: </span>' +
						'<span class="balloon__description-value">ООО “Три-З”</span>' +
						'</div>' +
						'<div class="balloon__description-strength">' +
						'<span class="balloon__description-column">Численность компании: </span>' +
						'<span class="balloon__description-value">1000 чел.</span>' +
						'</div>' +
						'<div class="balloon__description-date">' +
						'<span class="balloon__description-column">Дата проведения работ: </span>' +
						'<span class="balloon__description-value">Декабрь 2017</span>' +
						'</div>' +
						'</div>' +
						'</div>' +
						'<div class="balloon__footer">' +
						'<div class="balloon__footer-description">' +
						'Для целей бухгалтерского и управленческого учета была внедрена система «1С:ERP Управление предприятием 2».' +
						'</div>' +
						'</div>' +
						'</div>'
					;

					geoObjects[i] = new ymaps.Placemark(marker, {
						balloonContent: balloon,
						hintContent: 'Магазин в Серпухове',
					}, {
						balloonLayout: MyBalloonLayout,
						balloonContentLayout: MyBalloonContentLayout,
						iconLayout: 'default#image',
						iconImageHref: 'images/mark.svg',
						iconImageSize: [52, 57],
						iconImageOffset: [-26, -57]
					});

				}

				clusterer.add(geoObjects);
				map.geoObjects.add(clusterer);

				map.controls.add('zoomControl', {
					size: 'small',
					float: 'none',
					position: {
						top: mapHeight / 2 - 30,
						right: '45px'
					}
				});
			});
		}
	});
})
