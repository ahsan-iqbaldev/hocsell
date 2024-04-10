'use strict';

//modal variable
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () {modal.classList.add('closed')}

//modal eventlistner
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);



//notification toast variable
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

//notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
    notificationToast.classList.add('closed');
});

// mobile new variable
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++){
    
    //Mobile menu function
    const mobileMenuCloseFunc = function () {
        mobileMenu[i].classList.remove('active');
        overlay.classList.remove('active');
    }

    mobileMenuOpenBtn[i].addEventListener('click' , function() {
        mobileMenu[i].classList.add('active');
        overlay.classList.add('active');
    });

    mobileMenuCloseBtn[i].addEventListener('click' , mobileMenuCloseFunc);
    overlay.addEventListener('click' , mobileMenuCloseFunc);

}


// accordian variable
const accordianBtn = document.querySelectorAll('[data-accordion-btn]');
const accordian = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordianBtn.length; i++){
    accordianBtn[i].addEventListener('click', function () {

     const clickedBtn = this.nextElementSibling.classList.contains('active');
     
     for (let i = 0; i < accordian.length; i++){

        if(clickedBtn) break;

        if(accordian[i].classList.contains('active')){

            accordian[i].classList.remove('active');
            accordianBtn[i].classList.remove('active');

        }

     }

     this.nextElementSibling.classList.toggle('active');
     this.classList.toggle('active');

    });
}