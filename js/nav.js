window.addEventListener('load', () => {
  $(document).scroll(function () {
    var scroll_X = $(this).scrollTop();
    console.log(scroll_X)
    if (scroll_X >= 750) {

      $('.school li').addClass('schoolAct');
    }
    else if (scroll_X < 740) {
      $('.school li').removeClass('schoolAct');


    }


  });



});
