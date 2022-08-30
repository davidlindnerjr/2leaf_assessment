import { db } from '/config.js';

// CAROUSEL
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
let parentPortalBtn = document.querySelector("#parentPortalBtn")

$(window).on('load',() => {
    const loadModal = () => {
        modal.style.display = "block"
    }
    window.setTimeout(loadModal, 3000);
});

$(window).on('click', (e) => {
    if(e.target == modal){
        modal.style.display = "none"
    }
});

closeBtn.onclick = () => {
  modal.style.display = "none"
}

parentPortalBtn.onclick =  () => {
    modal.style.display = "block"
}

// PASSWORD AUTH
$("#passwordBtn").on('click', (e) => {
    e.preventDefault();
    let str = $("#passwordInput").val();

    if(str === 'password123'){
        window.location.href = 'parentPortal.html';
    } else {
        alert('Incorrect Password');
    }
});

// Firebase back end
const mailListRef = collection(db, 'mailList');

const addToMailList = async () => {

    try {
        await addDoc(mailListRef, {
            username: username,
            email: email,
        })

    } catch (err) {
        alert('Incorrect data. Try adding name and email again.')
    }

}

$("#emailBtn").on('click', (e) => {
    e.preventDefault();
    let name = $("#nameInput").val();
    let email = $("emailInput").val();

    console.log(name)
    console.log(email)
});
