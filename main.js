function onScroll () {

    if(scrollY > 0) {
        document.querySelector("#navigation").classList.add("scroll")
    } else {
        document.querySelector("#navigation").classList.remove("scroll")
    }

}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: '700'
}).reveal(
`#home-image,
.container,
#about,
.card,
#depositions,
.feedback-input,
label`);

ScrollReveal({
    origin: 'bottom',
    distance: '100px',
    duration: '2000'
}).reveal(`footer`);

/*Depositions Caroussel slider swiper */

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
});
