$(document).ready(function () {
  $('.allBtn').mouseover(function () {
    $('.menu').addClass('down')
  });
  $('.menu').mouseleave(function () {
    $('.menu').removeClass('down')
  });
  $('.menu li').mouseover(function () {
    $(this).addClass('on')
  });
  $('.menu li').mouseleave(function () {
    $(this).removeClass('on')
  });

  $('.nameBtn li').mouseover(function () {
    $(this).addClass('backAct')
  });
  $('.nameBtn li').mouseleave(function () {
    $(this).removeClass('backAct')
  });





























  $(document).scroll(function () {
    var scroll_X2 = $(this).scrollTop();
    console.log(scroll_X2)
    if (scroll_X2 >= 750) {

      $('.school li').addClass('schoolAct');

    }
    else if (scroll_X2 < 740) {
      $('.school li').removeClass('schoolAct');


    }


  });



});
