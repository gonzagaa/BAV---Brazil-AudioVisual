const videoEditing1 = document.getElementById('videoEditing1');
videoEditing1.addEventListener('click', snippetYtbLazyPlay);

const videoEditing2 = document.getElementById('videoEditing2');
videoEditing2.addEventListener('click', snippetYtbLazyPlay);

const videoEditing3 = document.getElementById('videoEditing3');
videoEditing3.addEventListener('click', snippetYtbLazyPlay);

const videoEditing4 = document.getElementById('videoEditing4');
videoEditing4.addEventListener('click', snippetYtbLazyPlay);

const videoEditing5 = document.getElementById('videoEditing5');
videoEditing5.addEventListener('click', snippetYtbLazyPlay);

const videoEditing6 = document.getElementById('videoEditing6');
videoEditing6.addEventListener('click', snippetYtbLazyPlay);

const animation3D1 = document.getElementById('animation3D1');
animation3D1.addEventListener('click', snippetYtbLazyPlay);

const animation3D2 = document.getElementById('animation3D2');
animation3D2.addEventListener('click', snippetYtbLazyPlay);

const animation3D3 = document.getElementById('animation3D3');
animation3D3.addEventListener('click', shorts);

const animation3D4 = document.getElementById('animation3D4');
animation3D4.addEventListener('click', shorts);

const animation3D5 = document.getElementById('animation3D5');
animation3D5.addEventListener('click', shorts);

function snippetYtbLazyPlay(evt) {
  evt.currentTarget.removeEventListener('click', snippetYtbLazyPlay);

  evt.currentTarget.innerHTML = `
  <iframe src="https://player-vz-22f7cecb-cb7.tv.pandavideo.com.br/embed/?v=${evt.currentTarget.dataset.id}&iosFakeFullscreen=true" style="border:none;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" allowfullscreen=true width="720" height="360" fetchpriority="high"></iframe>`
}

function shorts(evt) {
  evt.currentTarget.removeEventListener('click', shorts);

  evt.currentTarget.innerHTML = `<iframe src="https://player-vz-22f7cecb-cb7.tv.pandavideo.com.br/embed/?v=${evt.currentTarget.dataset.id}&iosFakeFullscreen=true" style="border:none;" allow="accelerometer;gyroscope;autoplay=true;encrypted-media;picture-in-picture" allowfullscreen=true width="720" height="360" fetchpriority="high"></iframe>`
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    sticky: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
      },

      1024: {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
      }
    },
  });


