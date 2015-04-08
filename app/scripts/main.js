'use strict';
$(document).ready(function() {

	//off canvas fixes
	$('.toggle-nav').click(function() {
		$('.inner-wrap').toggleClass('sidenav-open');
		$(this).find('.hamwrapper').toggleClass('checked');
	});

	//sidenav dropdowns
	$('.off-canvas-list li a').click(function() {
		$(this).addClass('active').parent().siblings().find('a').removeClass('active');
	});

	var on = false;
	function dropdownCaret(element) {
		var on = element.hasClass('slideOpen') ? true : false;
		var animateCaret = on ? element.find('#shape-open')[0] : element.find('#shape-close')[0];
		animateCaret.beginElement();
	}

	$('.top-level-dropdown').click(function() {
		$(this).toggleClass('slideOpen').parent().next('li').slideToggle();
		dropdownCaret($(this));
	});


});


