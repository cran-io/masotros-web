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


resizeProyectImage = function(){
	if(window.innerHeight >= $('.screen li img').innerHeight())
	{
		$('.screen li img').css({'width':'auto', 'height': '100vh'});
	}
	if(window.innerWidth >= $('.screen li img').innerWidth()) {
		$('.screen li img').css({'width':'100vw', 'height': 'auto'});
	} 
};

$(window).bind('resize', resizeProyectImage);

$(window).on('resize', resizeProyectImage);

$(onResize);



