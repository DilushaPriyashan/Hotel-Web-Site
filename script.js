const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('#slider .buttons .left');
const rightBtn = document.querySelector('#slider .buttons .right');
const hotel_inputs = document.querySelectorAll(".hotel-item");
const hotel_list = document.querySelectorAll(".sl-title li");

let activeSlide = 0;

// On load - Select slider's first title----------------------------------------------
document.addEventListener("DOMContentLoaded", function(event) {
    var selectFirst = document.querySelector('.sl-title li:first-child');
        selectFirst.classList.add('active');
});


// Set Active Slide----------------------------------------------------------------------
function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'));

    slides[activeSlide].classList.add('active');

    Object.keys(slides).forEach(key => {
        if (key == activeSlide) {
            document.querySelectorAll('[name="'+ slides[key].getAttribute("id") +'"]')[0].click();
        }
    });

    document.querySelector('.sl-numbers > span').innerHTML = '0' + (activeSlide + 1);
}


// Sticky Header----------------------------------------------------------------
const header = document.querySelector('header');
window.addEventListener('scroll', fixedHeader);

function fixedHeader() {
    if (window.scrollY > header.offsetHeight -100) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
}

// Mobile Menu----------------------------------------------------------------
const toggle = document.querySelector('#mobile-menu-icon .toggle');
const hamIcon = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('#main-menu-wrapper.mobile-menu');

function hamMenu() {
    if (toggle.checked) {
        hamIcon.classList.add('close-btn');
        mobileMenu.style = 'opacity: 1;  visibility: visible; transition: all 0.5s ease';
        hamIcon.style = 'background: var(--dark-gray)';
        document.querySelector('#language-menu a').style = 'background: var(--dark-gray)';
    } else {
        hamIcon.classList.remove('close-btn');
        mobileMenu.style = 'opacity: 0; visibility: hidden; transition: all 0.5s ease';
        hamIcon.style = 'background: var(--dark-font)';
        document.querySelector('#language-menu a').style = 'background: var(--dark-font)';
    }
}

// Facilities Hover----------------------------------------------------------------

function showPopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "block";
}

function hidePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "none";
}
