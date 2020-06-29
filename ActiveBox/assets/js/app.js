$(function() {


	/* Fixed Header */

	let header = $("#header");
	let intro = $("#intro");


	function addFixedClass(data) {

		let scrollPos = $(data).scrollTop();
		let introH = intro.innerHeight();


		if( scrollPos > introH ) {
			header.addClass("fixed");
		} 
		else {
			header.removeClass("fixed");
		}

	}


	$(window).on("scroll load resize", function(){

		addFixedClass(this);

	});


	/* Nav Toggle */

	let nav = $("#nav");

	$("#NavToggle").on("click", function () {

		e.preventDefault();

		nav.toggleClass("show");

	});


	/* Smooth scroll */


	$("[data-scroll]").on("click", function (e){

		e.preventDefault();

		let blockID = $(this).data('scroll');
		let blockOffset = $(blockID).offset().top;


		if(header.hasClass("fixed")) {
			blockOffset -= header.innerHeight();
		}

		nav.removeClass("show");

		$("html, body").animate({
			scrollTop: blockOffset - 30
		}, 700);

	});


	/*  Reviews: https://kenwheeler.github.io  */

	let slider = $("#reviewsSlider");

	slider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		dots: true
	});


});