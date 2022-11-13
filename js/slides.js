window.addEventListener('load', () => {
  const slide = document.querySelector('.skills_icon')
  const slideLi = document.querySelectorAll('.skills_icon li')


  for (let i = 0; i < slideLi.length; i++) {
    slideLi[i].addEventListener('mouseover', (e) => {
      e.currentTarget.classList.add('slides')



    });
  }














});
