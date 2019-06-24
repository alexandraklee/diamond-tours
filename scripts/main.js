$(document).ready(function () {
  $("#hamburger").click(function(){
    $('.mobile-nav').slideToggle();
  });



  $('.nav-button').click(function() {
    $('.nav').toggleClass('mobile-nav-active');
  })
});

