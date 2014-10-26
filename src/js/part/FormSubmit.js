BuildHouse.FormSubmit = function(){
	$('.js-formSubmit').on('submit', function(e){
		var $form = $(this);
		var url = $(this).attr('data-url');
		e.preventDefault();
		$.ajax({
			url: url,
			type: "POST",
			data: $form.serialize()
		}).done(function() {
			console.log('data');
		});
	});
};