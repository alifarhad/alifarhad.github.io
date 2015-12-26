$(document).ready(function() {

$('.parallax').imagesLoaded( function() {
  $("body").addClass("loaded");
});



 $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();





 
});



});

$(function(){
      $(".element, .text").typed({
        strings: ["I'm a feelancer, coder and IT enthusiast. I like to code stuff that's both fun and makes life easier. I'm focused on front-end development for now, but my heart lies in backend development."],
        typeSpeed: 0,
        showCursor: false
      });
  });

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$("li").click(function() {
    $("li").removeClass("active");
    $(this).addClass("active");
  });






