const modalOpen = document.querySelector('#modalOpen');
const modalClose = document.querySelector('#modalClose');
const mobileNav = document.querySelector('.mobile-nav');

function openMenu() {
    mobileNav.style.display = 'block'; 
    modalOpen.style.display = 'none'; 
}

function closeMenu() {
    mobileNav.style.display = 'none'; 
    modalOpen.style.display = 'block'; 
}

modalOpen.addEventListener('click', openMenu);
modalClose.addEventListener('click', closeMenu);
