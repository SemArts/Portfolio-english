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


// modal script
const modalController = ({modal, btnOpen, btnClose, time = 300}) => {
    const buttonElems = document.querySelectorAll(btnOpen);
    const modalElem = document.querySelector(modal);
    const body = document.querySelector('body');
    modalElem.style.cssText = `
      display: flex;
      visibility: hidden;
      opacity: 0;
      transition: opacity ${time}ms ease-in-out;
    `;
  
    const closeModal = event => {
      const target = event.target;
  
      if (
        target === modalElem ||
        (btnClose && target.closest(btnClose)) ||
        event.code === 'Escape'
        ) {
        
        modalElem.style.opacity = 0;
  
        setTimeout(() => {
          modalElem.style.visibility = 'hidden';
        }, time);

        body.classList.remove('modal-open');

        window.removeEventListener('keydown', closeModal);
      }
    }
  
    const openModal = () => {
      modalElem.style.visibility = 'visible';
      modalElem.style.opacity = 1;
      body.classList.add('modal-open');
      window.addEventListener('keydown', closeModal)
    };
  
    buttonElems.forEach(btn => {
      btn.addEventListener('click', openModal);
    });
  
    modalElem.addEventListener('click', closeModal);

  };
  
  modalController({
    modal: '.modal',
    btnOpen: '.modal-btn',
    btnClose: '.modal-close',
  });
  
