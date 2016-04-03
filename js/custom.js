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
	        dotColor: 'rgba(255,255,255,0.1)',
	        lineColor: 'rgba(255,255,255,0.1)'
	      });

	   }//width	   
	

	//************************** STEP FORM *************************************
	var theForm = document.getElementById( 'theForm' );
	new stepsForm( theForm, {
		onSubmit : function( form ) {
			// hide form
			classie.addClass( theForm.querySelector( '.simform-inner' ), 'hide' );
			
			$.ajax({
				url: '//formspree.io/villalon.frontend@gmail.com',
				method: 'POST',
				data: $('#theForm').serialize(),
				dataType: 'json',
				success: function(data) {
					var messageEl = theForm.querySelector( '.final-message' );
					messageEl.innerHTML = 'Thank you! We\'ll be in touch.';
					classie.addClass( messageEl, 'show' );
				},
				error: function(err) {
					alert('Erro!');
				}
			});//ajax
			
		}
	} );


});//ready

//Starsky
window.addEventListener('mousemove', function(e){
	var dx = e.clientX / window.innerWidth - .5, dy = e.clientY / window.innerHeight - .5;
	var cont = window.skyCont = window.skyCont || document.querySelector('.box-header');
	var back = window.skyBack = window.skyBack || document.querySelector('#particles');
	cont.style.webkitTransform = cont.style.transform = 'translate3d(-50%,-50%,50px) scale(.9) rotateY('+(dx*-22)+'deg) rotateX('+(dy*-10)+'deg)';
	back.style.webkitTransform = back.style.transform = 'translate(' + (dx*05) + 'px,' + (dy*05) + 'px)';
});