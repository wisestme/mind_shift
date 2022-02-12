// MENU SHOW/HIDE Y HIDDEN
const navMenu = document.getElementById('nav-menu'),
  navOpen = document.getElementById('nav-show'),
  navClose = document.getElementById('nav-close'),
  allMenuModalClose = document.querySelectorAll('.menu_modal_close')

  // MENU SHOW
  // Validate if constant exists
if(navOpen) {
  navOpen.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
    navOpen.classList.add('hide-icon');
  })
}

// MENU HIDE
  // Validate if constant exists
  if(navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
      navOpen.classList.remove('hide-icon');
    })
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
