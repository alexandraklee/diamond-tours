$(document).ready(function () {
  $("#hamburger").click(function(){
    $('.mobile-nav').slideToggle();
  });



  $('.nav-button').click(function() {
    $('.nav').toggleClass('mobile-nav-active');
  })
});



// This is the pop-up gallery. This code is copied directly from the magnific website, just changing for the class on the gallery. 

$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});
});

// This creates a new typing animation in vanilla javascript 
var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
	loop: true,
   loopCount: Infinity,
	typeSpeed: 90
});
