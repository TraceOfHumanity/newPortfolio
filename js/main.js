const menu = document.querySelector('.menu');
const toggle = document.querySelector('.toggle');

menu.addEventListener('click', function(e){
  menu.classList.toggle('active')
})
document.addEventListener('click', function (event) {
  if (event.target !== menu && event.target !== toggle) {
    menu.classList.remove('active')
  }
})

