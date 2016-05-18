// Carrousell

$(window).load(function(){
	$('#carousel').flexslider({
		animation: "slide",
		controlNav: false,
		directionNav: true,
		animationLoop: true,
		slideshow: false,
		itemWidth: 210,
		touch: true, 
		itemMargin: 0,
		asNavFor: '#slider',
	});

	$('#slider').flexslider({
		animation: "slide",
		controlNav: false,
		directionNav: false,
		animationLoop: true,
		slideshow: false,
		touch: true, 
		sync: "#carousel",
		start: function(slider){
			$('body').removeClass('loading');
		}
	});
});



