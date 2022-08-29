// BG IMAGE CAROUSEL

let images = ['./assets/banner_image_1.png', './assets/banner_image_2.png'];
let nextimage = 0;

const doSlideshow = () => {
    if(nextimage >= images.length){
        nextimage = 0;
    }
    $('.hero-image')
    .css('background-image','url("'+images[nextimage++]+'")')
    .fadeIn(500, () => {
        setTimeout(doSlideshow, 5000);
    });
}

doSlideshow();

// MODAL
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")

    $(window).on('load',() => {
        const loadModal = () => {
            modal.style.display = "block"
        }
        window.setTimeout(loadModal, 3000);
    });

closeBtn.onclick = () => {
  modal.style.display = "none"
}

$(window).on('click', (e) => {
  if(e.target == modal){
    modal.style.display = "none"
  }
});