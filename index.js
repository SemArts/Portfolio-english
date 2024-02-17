const burgerMenu = document.querySelector('.burger');
const navMenu = document.querySelector('.nav');

function closeMenuOnClickOutside(event) {
    if (!burgerMenu.contains(event.target) && !navMenu.contains(event.target)) {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('open');
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}

burgerMenu.addEventListener('click', function(event) {
    this.classList.toggle('active');
    navMenu.classList.toggle('open');
    if (this.classList.contains('active')) {
        document.addEventListener('click', closeMenuOnClickOutside);
    }
    event.stopPropagation();
});
