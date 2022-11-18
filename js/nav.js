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










  const menu = $('.menu li');
  const contents = $('section');
  console.log(contents)
  console.log(menu)

  //contents.css('background', 'red');
  menu.click(function (event) {
    event.preventDefault();

    let i = $(this).index();
    let section = contents.eq(i);//인덱스값에 해당되는 콘텐츠에 div
    let tt = section.offset().top;//해당되는 콘텐츠의 div에 top값
    console.log(tt)

    $('html,body').stop().animate({ scrollTop: tt });

  });

  // //스크롤에 위치에 따라서 버튼에 색상적용
  // $(window).scroll(function () {
  //   const sct = $(window).scrollTop();
  //   contents.each(function () {//con1,con2,con3,con4
  //     let tg = $(this);
  //     let i = tg.index();
  //     if (tg.offset().top <= sct) {//현재 해당되는 contents가 대상인지
  //       menu.removeClass('on');
  //       menu.eq(i).addClass('on');
  //     }
  //   });

  // });

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




