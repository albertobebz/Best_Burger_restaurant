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
      right: "-255px"
    }, 200);

    $('body').animate({
      right: "0px"
    }, 200);
  });


  
  

};


$(document).ready(main);