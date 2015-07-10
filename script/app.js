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

  // $('#mainBurger').hide();

  // $('#mainBurger')
  //  .animate({
  //        bottom: 600
  //     },
  //     'slow'
  //  );

  // SCROLL FEAT FOR THE SOCIAL ICON
  $(window).scroll(function(){
    var navTop =  $(window).scrollTop();
    $('.model-0').css("top", navTop + 50);
  });

};


$(document).ready(main);
