window.$ = window.jQuery = require('jquery');
import 'slick-carousel'


$(document).ready(() => {
	//Variables

	//Fixed menu
	function fixed_menu() {
		if ($(window).scrollTop() > 0) {
			// $('.js-fixed').addClass('fixed');
			// $('.js-search__results').addClass('fixed__results');
			// $('.js-main').addClass('is-fixed');

		} else {
			// $('.js-fixed').removeClass('fixed');
			// $('.js-search__results').removeClass('fixed__results');
			// $('.js-main').removeClass('is-fixed');
			// $('.js-navigation__list__wrapper').css('display', '')
			// tabletMenuButton.removeClass('open')
		}
	}

	fixed_menu();
	$(window).scroll(function () {
		fixed_menu();
	});

	// Slick slider in prime section
	$('.js-prime__slider').slick({
		autoplay: false,
		dots: true,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev prime__slick-prev"><svg class="icon icon-arrow_sl_l"><use xlink:href="#icon-arrow_sl_l"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-next prime__slick-next"><svg class="icon icon-arrow_sl_r"><use xlink:href="#icon-arrow_sl_r"></use></svg></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			},
		]
	});

	//Slick slider in steps section
	$('.steps__slider').slick({
		autoplay: false,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev news__actions__slick-prev"><svg class="icon icon-arrow-l"><use xlink:href="#icon-arrow-l"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-next news__actions__slick-next"><svg class="icon icon-arrow-r"><use xlink:href="#icon-arrow-r"></use></svg></button>',
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
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev news__actions__slick-prev"><svg class="icon icon-arrow-l"><use xlink:href="#icon-arrow-l"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-next news__actions__slick-next"><svg class="icon icon-arrow-r"><use xlink:href="#icon-arrow-r"></use></svg></button>',
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

	//Input placeholders
	let inputWrapper = $('.js-material-input');

	inputWrapper.each(function() {
		if ($(this).find('input,textarea').val()) {
			$(this).addClass('active');
		}
		else {
			$(this).removeClass('active');
		}
	});
	inputWrapper.find('input,textarea').focusin(function() {
		console.log(123);
		$(this).closest('.js-material-input').addClass('focus');
	});
	inputWrapper.find('input,textarea').focusout(function() {
		console.log(321);
		$(this).closest('.js-material-input').removeClass('focus');
	})
	inputWrapper.find('input,textarea').change(function() {
		if ($(this).val()) {
			$(this).closest('.js-material-input').addClass('active');
		}
		else {
			$(this).closest('.js-material-input').removeClass('active');
		}
	});

	//reCaptcha

	//Mobile menu toggle
	$('.js-header__menu-open').click(function(){
		$(this).toggleClass('open');
		$('.js-mobile').slideToggle()
	});

	//Tablet menu open
	// tabletMenuButton.click(function(){
	// 	if ($(this).hasClass('open')) {
	// 		$(this).removeClass('open');
	// 		$('.js-navigation__list__wrapper').slideUp()
	// 	} else {
	// 		$(this).addClass('open');
	// 		$('.js-navigation__list__wrapper').slideDown()
	// 	}
	// });


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
						'<span style="font-weight: 600;font-size: 18px;">{{ properties.geoObjects.length }}</span>'
					),
					clusterer = new ymaps.Clusterer({
						clusterIcons: [
							{
								href: 'images/mark-big.svg',
								size: [57, 67],
								offset: [-27.5, -67],
								iconContentOffset: [23, 15],
							},
							{
								href: 'images/mark-big.svg',
								size: [90, 108],
								offset: [-45, -108],
								iconContentOffset: [25, 25],
							}],
						clusterNumbers: [100],
						clusterIconContentLayout: MyIconContentLayout
					});


				var MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
					`
<div class="popover">
	<div class="popover__arrow"></div>
	<div class="popover__inner">
		<a class="popover__close" href="#">
			<svg class="icon icon-close">
				<use xlink:href="#icon-close"></use>
			</svg>
		</a>
		$[[options.contentLayout observeSize minWidth=300 maxWidth=432]]
		<span class="popover__tail"></span>
	</div>
</div>
`, {
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
					var balloon = `

<div class="balloon">
	<div class="balloon__header">
		<div class="balloon__title">
			<a href="#">Медико-биологический центр Фармалад</a>
		</div>
	</div>
	<div class="balloon__body">
		<div class="balloon__address">
			<svg class="icon icon-mark"><use xlink:href="#icon-mark"></use></svg>
			<span class="">г. Воронеж, ул. Правды, дом 26, офис 2</span>
		</div>
		<div class="balloon__phone">
			<svg class="icon icon-tel"><use xlink:href="#icon-tel"></use></svg>
			<a href="tel:+7 (926) 047-32-22" class="">+7 (926) 047-32-22</a>
		</div>
		<div class="balloon__email">
			<svg class="icon icon-mail"><use xlink:href="#icon-mail"></use></svg>
			<a href="mailto:somemail@mail.ru">somemail@mail.ru</a>
		</div>
		<div class="balloon__work-time">
			<svg class="icon icon-time"><use xlink:href="#icon-time"></use></svg>
			<span class="">с 10:00 до 22:00</span>
		</div>
	</div>
</div>

`;

					geoObjects[i] = new ymaps.Placemark(marker, {
						balloonContent: balloon,
						hintContent: 'Магазин в Серпухове',
					}, {
						balloonLayout: MyBalloonLayout,
						balloonContentLayout: MyBalloonContentLayout,
						iconLayout: 'default#image',
						iconImageHref: 'images/mark-small.svg',
						iconImageSize: [39, 45],
						iconImageOffset: [-19.5, -45]
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
