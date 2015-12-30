//window.viewportUnitsBuggyfill.init();

$(document).ready(function() {

	

	// if ($(window).width() > 640) {
	//       var s = skrollr.init()
	//   }

	// if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
	//     skrollr.init().destroy();
	// }

	var value = $('#visitor-name-input').val();
	$('.enter-btn').hide();
	
	$('#visitor-name-input').click(function(event) {
	  $('html').one('click',function() {
  	if ($('#visitor-name-input').val() === '') {
	  		// console.log('ok1');
	  		$('.skip-btn').show('fast');
	  		$('.enter-btn').hide('fast');
	  	} else if ($('#visitor-name-input').val() != '') {
	  		$('.skip-btn').hide('fast');
	  		$('.enter-btn').show('fast');
	  	} else {
	  		$('.skip-btn').hide('fast');
	  	}
	  });
	  $('.skip-btn').hide('fast');
	  $('.enter-btn').show('fast');
	  event.stopPropagation();
	});	

	var enter = function(){
		var value = $('#visitor-name-input').val();

	  	if ($('#visitor-name-input').val() === '') {
	  		$('.visitor-name-display').text("Studio");
	  		value = 'Sudio';
	  	}else{
	  		$('.visitor-name-display').text(value);
	  	}

	  	localStorage.setItem('username', value);

	  	$('.index-form').addClass('display-off');
	    $('.presentation').addClass('display-on');
	};
	$('#visitor-name-input').keypress(function (e) {
		$('.enter-btn').show('fast');
		if(e.which == 13) enter();
	});

	var clickEnter = $('.enter-btn').click(enter);

	$('.skip-btn').click(function(){
		value = 'Studio';
		window.name = value;
	 	window.location = 'break';
	});


	$('.visitor-name').text(localStorage.getItem('username'));

});