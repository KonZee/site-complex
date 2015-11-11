$(document).ready(function(){

	/*
	 * Order
	 */
	$('a.checkout-link').click(function(e){
		e.preventDefault();
		$('.popup__window').hide();
		$('.popup__window--1').show();
		$('.popup').fadeIn();
	});
	$('.popup__window > .submit').click(function(e){
		e.preventDefault();
		$('.popup__window--1').fadeOut();
		$('.popup__window--2').delay(150).fadeIn();
	});
	$('.popup__shade, .popup__window > .cansel, .popup__window > .ok').click(function(e){
		e.preventDefault();
		$('.popup').fadeOut();
	});

	/*
	 * Menu
	 */
	$('.navigation__hamburger').click(function(){
		$(this).toggleClass('expanded');
		$(this).siblings('ul').slideToggle();
	});
	$('.navigation__item--submenu > a').click(function(e){
		if($(window).width() <= 991){
			e.preventDefault();
		}
		$(this).parent().toggleClass('expanded');
		$(this).siblings('ul').slideToggle();
	});

	/*
	 * Breadcrumbs
	 */
	$('.breadcrumbs__back').click(function(e){
		e.preventDefault();
		$(this).toggleClass('expanded');
		$('.breadcrumbs__wrapper').slideToggle();
	});

	/*
	 * Scroll top
	 */
	$('.to-top').click(function(){
		$('html, body').animate({scrollTop: 0});
	});

	/*
	 * Slider
	 */
	var slider = $('.slider');
	var sliderHeight = 0;
	var interval = 5000;
	var timer;
	var sliderItem = $('.slider__item');
	var sliderLength = sliderItem.length;
	var sliderWidth = sliderItem.eq(0).width();
	var currentItem = 0;
	var nextItem;

	timer = setInterval(nextSlide, interval);

	$('.slider__nav--prev').click(function(){
		prevSlide();
		clearInterval(timer);
		timer = setInterval(nextSlide, interval);
	});
	$('.slider__nav--next').click(function(){
		nextSlide();
		clearInterval(timer);
		timer = setInterval(nextSlide, interval);
	});

	function prevSlide(){
		if (currentItem === 0){
			nextItem = sliderLength - 1;
		}
		else{
			nextItem = currentItem - 1;
		}
		sliderItem.eq(nextItem).css({'left': sliderWidth * -1});
		sliderItem.each(function(){
			$(this).animate({'left': parseInt($(this).css('left')) + sliderWidth });
		});
		currentItem = nextItem;
	}
	function nextSlide(){
		if(currentItem < (sliderLength - 1)){
			nextItem = currentItem + 1;
		}
		else{
			nextItem = 0;
		}
		sliderItem.eq(nextItem).css({'left': sliderWidth});
		sliderItem.each(function(){
			$(this).animate({'left': parseInt($(this).css('left')) - sliderWidth });
		});
		currentItem = nextItem;
	}

	/*
	 * Tabs
	 */
	$('.nav-tabs a').click(function(e){
		e.preventDefault();
		$(this).tab('show');
	})

	/*
	 * Product images
	 */
	$('.product__image a').click(function(e){
		e.preventDefault();
		var url = $(this).data('url');
		$('.product__image .big img').attr('src', url);
	});

	/*
	 * Contacts page
	 */
	contactsHeight();

	/*
	 * Add item to car parts order list
	 */
	$('.page-form__add-element').click(function(e){
		e.preventDefault();
		var length = $('[name^="article-"]').length;
		$(this).before('<input class="page-form__input page-form__input--text" placeholder="Артикул" name="article-'+ (length + 1) +'">');
	});
});

$(window).resize(function(){
	/*
	 * Contacts page
	 */
	contactsHeight();
});

var contactsHeight = function(){
	var employees = $('.employees');
	employees.children('.employee').removeAttr('style');
	if($(window).width() > 991){
		employees.each(function(){
			if($(this).index() % 2 === 0){
				var employee1 = $(this).children('.employee');
				var employee2 = $(this).next().children('.employee');
				var height = employee1.height();
				var siblHeight = employee2.height();
				if(siblHeight > height){height = siblHeight}
				employee1.height(height);
				employee2.height(height);
			}
		});
	}};