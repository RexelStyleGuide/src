'use strict';
$(document).ready(function() {

	//off canvas fixes
	$('.toggle-nav').click(function() {
		$('.inner-wrap').toggleClass('sidenav-open');
	});

	$('.off-canvas-list > li > a').click(function() {
		$(this).addClass('active').parent().siblings().find('a').removeClass('active');
	});

});
