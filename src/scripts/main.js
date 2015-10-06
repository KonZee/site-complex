$(document).ready(function(){

	/*
	 * Slider
	 */
	var slider = $('.slider');
	var sliderHeight = 0;
	$('.slider__item img').load().each(function(){
		if($(this).height() > sliderHeight){sliderHeight = $(this).height();}
	});
	$('.slider').height(sliderHeight);

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