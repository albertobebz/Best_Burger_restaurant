var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.menu').hover(function() {
    $(this).animate({
      right: "0px"
    }, 200);

    $('body').animate({
      right: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.menu').mouseleave(function() {
    $('.menu').animate({
      right: "-245px"
    }, 200);

    $('body').animate({
      right: "0px"
    }, 200);
  });

  $('#mainBurger').hide();
  $('#mainBurger').fadeIn(2000);
  
  // $("#mainBurger").animate({width: "800px"}, 'slow');
  
  // SHOW LOGO WHEN HOVER ON HAMBURGER
  $('#logo').hide();

  $(window).mousemove(function(){
    $('#logo').show().animate({
      top: '-210px'
    }, 300);
  });
  

};


$(document).ready(main);
