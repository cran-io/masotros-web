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
	if (flag) {
		$.ajax({
			type: "POST",
			url: "https://mandrillapp.com/api/1.0/messages/send.json",
			data: {
				'key': 'V0cITqelNFNJmxkzQ26N1g',
				'message': {
					'from_email': $('#formEmail').val(),
					'from_name': $('#formName').val(),
					'to': [
						{
							'email': 'info@masotros.com',
							'name': '+Otros',
							'type': 'to'
						}
					],
					"Teléfono: " + $('#formPhone').val() + "<br>" + "Mensaje: " + $('#formMessage').val()
				}
			},
			success: function(){
				location.reload();
			}
		});
	}
});
