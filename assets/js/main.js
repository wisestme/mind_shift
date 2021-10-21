// MENU SHOW/HIDE Y HIDDEN
const navMenu = document.getElementById('nav-menu'),
  navOpen = document.getElementById('nav-show'),
  navClose = document.getElementById('nav-close');

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

  // Appointment Modal Control
  let appointmentButton = document.getElementById('appointment_button'),
  appointmentModal = document.getElementById('appointment');
  if(appointmentButton) {
    appointmentButton.addEventListener('click', () => {
      appointmentModal.style.top = 0;
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