$(function () {
	var width = $(window).width(),
		height = $(window).height(),
		headerHeight = $('header').outerHeight();
	// Smooth scrolling using jQuery easing
	$('a.smooth-scroll[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
			if (target.length) {
				$("html, body").animate({
					scrollTop: target.offset().top - headerHeight
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	if (width < 930) {
		$('.hamburger').click(function(){
			$(this).toggleClass('active');
			$('header > .container > nav').fadeToggle();
		});
		$('header > .container > nav > ul > li > a').click(function(){
			$('.hamburger').removeClass('active');
			$('header > .container > nav').fadeOut();
		});
	}

	$('.input-inline i.icon').click(function(){
		$(this).siblings('input').attr('type',
			$(this).siblings('input').attr('type')==='password'?'text':'password'
		);
		$(this).toggleClass('icon-eyeon icon-eyeoff');
	});

	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll >= height / 3) {
			$("header").addClass("scroll");
		} else {
			$("header").removeClass("scroll");
		}
	});
});
