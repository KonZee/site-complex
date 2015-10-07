$(document).ready(function(){

	/*
	 * Menu
	 */
	$('.navigation__hamburger').click(function(){
		$(this).toggleClass('expanded');
		$(this).siblings('ul').slideToggle();
	});
	$('.navigation__item--submenu a').click(function(e){
		e.preventDefault();
		$(this).parent().toggleClass('expanded');
		$(this).siblings('ul').slideToggle();
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

});