const screenW = window.innerWidth;
console.log(screenW)

const menuTrigger = document.querySelector('.menu-trigger');
const navUl = document.querySelector('.main-nav ul');
const links = document.querySelectorAll('.link-to-section');
const mainButton = document.querySelectorAll('.main-button');
console.log(mainButton)

menuTrigger.addEventListener('click', () => {
  menuTrigger.classList.toggle('active');
  navUl.classList.toggle('nav');

});


links.forEach(link => {
  link.addEventListener('click', () => {
    menuTrigger.classList.remove('active');
    navUl.classList.remove('nav');
  });
});


mainButton.forEach(button => {
  button.addEventListener('click', () => {
    menuTrigger.classList.remove('active');
    navUl.classList.remove('nav');
  })
})


