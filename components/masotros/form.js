$("#contactForm").on('submit', function(e) {
	e.preventDefault();
	var flag = true;
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	$('#contactForm *').filter(':input').each(function(input) {
		$(this).css('border', '0px');
		if ($(this).attr('id') != 'sendButton' && $(this).val() == '') {
			$(this).css('border', '1px solid red');
			flag = false;
		}
		if ($(this).attr('id') == "formEmail" && !re.test($(this).val())) {
			$(this).css('border', '1px solid red');
			flag = false;
		}
	});
});
