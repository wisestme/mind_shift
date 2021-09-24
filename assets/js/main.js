// MENU SHOW/HIDE Y HIDDEN
const navMenu = document.getElementById('nav-menu'),
  navOpen = document.getElementById('nav-show'),
  navClose = document.getElementById('nav-close');

  // MENU SHOW
  // Validate if constant exists
if(navOpen) {
  navOpen.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}

// MENU HIDE
  // Validate if constant exists
  if(navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    })
  }