window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
    if(scrollY > 0) {
        document.querySelector("#navigation").classList.add("scroll")
    } else {
        document.querySelector("#navigation").classList.remove("scroll")
    }
}

function showButtonInstagramOnScroll() {
    if(scrollY > 500) {
        document.querySelector("#buttonInstagram").classList.add("show")
    } else {
        document.querySelector("#buttonInstagram").classList.remove("show")
    }
}

/*button close and open menu*/
function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

/*animation scrollreveal*/

/*carroussel*/
