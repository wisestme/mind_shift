// MENU SHOW/HIDE Y HIDDEN
const navMenu = document.getElementById('nav-menu'),
  navOpen = document.getElementById('nav-show'),
  // navClose = document.getElementById('nav-close'),
  allMenuModalClose = document.querySelectorAll('.menu_modal_close'),
  menuBars = document.querySelector('.menu_bars');

  // MENU SHOW
  // Validate if constant exists
  // Control navigation animation
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
      nav.classList.replace(`slide_${direction1}_${i + 1}`, `slide_${direction2}_${i + 1}`);
  })
}

// toggle nav
function toggleNav() {
  if(navMenu.classList.contains('menu_slide_left')) {
  navMenu.classList.replace('menu_slide_left', 'menu_slide_right');
  // animate-in nav items
  navAnimation('out', 'in')
  } else {
      navMenu.classList.replace('menu_slide_right', 'menu_slide_left');
      // animate-out nav items
      navAnimation('in', 'out')
  }
  // navOpen.classList.add('hide-icon');
  menuBars.classList.toggle('change');
}


if(navOpen) {
  navOpen.addEventListener('click', toggleNav)
}

  // Validate if constant exists
  if(allMenuModalClose) {
    allMenuModalClose.forEach(menuModalClose => {
      menuModalClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        navOpen.classList.remove('hide-icon');
      })
    }); 
  }

  // close nav menu on item click
  const navItems = document.querySelectorAll('.nav__item')
  navItems.forEach(navItem => {
    navItem.addEventListener('click', toggleNav);
  })

  // Appointment Modal Control
  // Open modal
  let appointmentButton = document.getElementById('appointment_button'),
  appointmentModal = document.getElementById('appointment');

  if(appointmentButton) {
    appointmentButton.addEventListener('click', () => {
      appointmentModal.style.top = 0;
    })
  }

  // Close modal
let closeAppointmentModal = document.getElementById('appointment_close');

if(closeAppointmentModal) {
  closeAppointmentModal.addEventListener('click', () => {
    appointmentModal.style.top = '-200vh';
  })
}

  // Phone modal control
let phoneModalIcon = document.querySelector('.phone_quicklinks');
let phoneModal = document.querySelector('.phone_modal');
let closePhoneModal = document.querySelector('.phone_close_modal');

// Validate if constant exists
if(phoneModalIcon) {
  phoneModalIcon.addEventListener('click', () => {
    phoneModal.style.right = 0;
  })
}

// Validate if constant exists
if(closePhoneModal) {
  closePhoneModal.addEventListener('click', () => {
    phoneModal.style.right = '-400px';
  })
}

// Coming soon control
let allComingSoon = document.querySelectorAll('.coming_soon');
let soonModal = document.querySelector('.soon_modal');
let soonCloseModal = document.querySelector('.soon_close_modal');

if(allComingSoon) {
  allComingSoon.forEach(comingSoon => {
    comingSoon.addEventListener('click', () => {
    soonModal.style.top = 0;      
    })    
  });
}

if(soonCloseModal) {
  soonCloseModal.addEventListener('click', () => {
    soonModal.style.top = '200vh';      
  })
}


// flickity
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: true
});

setTimeout(setHeight, 2000);
function setHeight() {
  let flickityViewport = document.querySelector('.flickity-viewport')

flickityViewport.style.height = '280px';
}
