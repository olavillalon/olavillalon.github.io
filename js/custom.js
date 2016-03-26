$(document).ready(function(){
	
	//************************** MENU ****************************************
	var $page = $('#menu');

	$('.menu-toggle').on('click', function(){
		$page.toggleClass('shazam');
		$('body').toggleClass('overlay-layer');
	});
	$('main').on('click', function(){
		$page.removeClass('shazam');
	});
	//esconde menu depois que é clicado
	$('.menu-items > li > a').on('click', function(){
		setTimeout(function(){
			$page.removeClass('shazam');
			$('body').removeClass('overlay-layer');
		},600);
	});

	// Add smooth scrolling to all links inside a navbar
	$("#menu a, .down").on('click', function(event){
	  //event.preventDefault();
	  var hash = this.hash;
	  $('html, body').animate({
	    scrollTop: $(hash).offset().top
	  }, 800, function(){
	    window.location.hash = hash;
	  });
	});

	//************************** PARALAX *************************************
	$('.parallax').parallax();

	//************************** PARTICULES ***********************************
	  var navHeight = $( window ).height() - 500;
	  var screenWidth = $(window).width();
	  
	  if(screenWidth > 1000) {
	    
	      $('#particles').particleground({
	        dotColor: '#B8D3D8',
	        lineColor: '#017FBA'
	      });
	      $('.intro').css({
	        'margin-top': -($('.intro').height() / 2)
	      });

	   }//width
	

	//************************** STEP FORM *************************************
	var theForm = document.getElementById( 'theForm' );
	var messageEl = theForm.querySelector( '.final-message' );
	new stepsForm( theForm, {
		onSubmit : function( form ) {
			// hide form
			classie.addClass( theForm.querySelector( '.simform-inner' ), 'hide' );
			
			form.submit(function(e) {
				console.log("esta no submit");
				e.preventDefault();
				$.ajax({
					url: '//formspree.io/villalon.frontend@gmail.com',
					method: 'POST',
					data: $(this).serialize(),
					dataType: 'json',					
					success: function(data) {
						messageEl.innerHTML = 'Thank you! We\'ll be in touch.';
						classie.addClass( messageEl, 'show' );
					},
					error: function(err) {
						messageEl.innerHTML = 'Ops! There was an error.';
						classie.addClass( messageEl, 'show' );
					}
				});
			});	//submit		
		}
	} );


});//ready