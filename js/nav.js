window.addEventListener('load', () => {
  const school = document.querySelector('school')
  const schoolLi = document.querySelectorAll('school li')
  let targetY = 0;
  document.addEventListener('scroll', (e) => {
    targetY = document.documentElement.scrollTop
    console.log(targetY)

    if (targetY >= 100) {

      schoolLi.classList.add('schoolAct')


    }



  });

});
