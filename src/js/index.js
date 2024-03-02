const modalOpen = document.querySelector('#modalOpen');
const modalClose = document.querySelector('#modalClose');
const mobileNav = document.querySelector('.mobile-nav');

function openMenu() {
    setTimeout(() => {
        mobileNav.classList.add("open");
        modalOpen.style.display = "none";
    }, 200);
}

function closeMenu() {
    setTimeout(() => {
        mobileNav.classList.remove("open");
        modalOpen.style.display = "block";
    }, 200);
}

modalOpen.addEventListener('click', openMenu);
modalClose.addEventListener('click', closeMenu);
