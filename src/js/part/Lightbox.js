BuildHouse.LightBox = function(){
	var resizeId = 0;
	$('.js-colorboxGallary, .js-colorboxJoin').on('click', function(e){
		e.preventDefault();
	});
	
	$('.js-colorboxJoin').colorbox({
		inline: true,
		className: 'modalJoin',
		fixed: true,
		scrolling: false
	});
	$(window).on("resize", function(){
		clearTimeout(resizeId);
		resizeId = setTimeout($.colorbox.close(), 500);
	});
	ResizeColorboxJoin = function(){
		var width = $('#formRegistration').width();
		var height = $('#formRegistration').height();
		$.colorbox.resize({
			width: width,
			height: height,
			scrolling: false
		});
	};

	$('.js-colorboxGallary').each(function(){
		var gallary = $(this).attr('data-gallary');
		$(this).colorbox({
			rel: gallary,
			maxWidth: '90%',
			maxHeight: '90%',
			photo: true,
			className: 'modalGallary',
			fixed: true,
			scrolling: false
		});
	});
};