//Select element function
const menuToggler = document.querySelector('.menu-toggle');
const body = document.querySelector('body');

// let menuToggler = selectElement('.menu-toggle');
// let body = selectElement('.body');

// menuToggler.addEventListener('click', function () {
//   body.classList.toggle('open');
// })

menuToggler.addEventListener('click', function () {
  body.classList.toggle('open')
})