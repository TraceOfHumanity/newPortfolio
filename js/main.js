let menu = document.querySelector('.menu');
let toggle = document.querySelector('.toggle');

menu.addEventListener('click', function(e){
  menu.classList.toggle('active')
})
document.addEventListener('click', function (event) {
  if (event.target !== menu && event.target !== toggle) {
    menu.classList.remove('active')
  }
})

let themes = document.getElementsByClassName('color__theme');
for (let i = 0; i < themes.length; i++) {
  themes[i].addEventListener('click', function () {
    document.documentElement.classList.remove('light', 'darck', 'olive', 'seagreen', 'teal', 'saddlebrown', 'midnightblue');
    document.documentElement.classList.add(themes[i].value);
    console.log(document.documentElement.classList.add(themes[i].id))
  })
};

