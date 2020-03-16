// active link navigation

var navigation = document.getElementById("navigation");

navigation.addEventListener("click", (event) => {
    navigation.querySelectorAll("a").forEach(item => {
        item.classList.remove("link-active");
    });
    event.target.classList.add("link-active");
});

// slider

var slides = document.querySelectorAll(".slide");
var current = 0;
slider();

function slider() {
    if (slides[current].classList.contains('slide-2')) {
        document.querySelector('.section__slider').style.background = 'rgb(100,139,240)';
        document.querySelector('.section__slider').style.borderBottom = 'solid 6px #4f7eff';
    } else {
        document.querySelector('.section__slider').style.background = '#f06c64';
        document.querySelector('.section__slider').style.borderBottom = '6px solid #ea676b';
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('opacity0');
    }
    slides[current].classList.remove('opacity0');
}

document.querySelectorAll('.button_container')[0].onclick = function() {
    if (current - 1 == -1) current = slides.length - 1;
    else current--;
    slider();
};
document.querySelectorAll('.button_container')[1].onclick = function() {
    if (current + 1 == slides.length) current = 0;
    else current++;
    slider();
};

// phone displays on/off

let home_Phone_V = document.querySelector('.home-button_vertical');
let home_Phone_H = document.querySelector('.home-button_horizontal');
let verticalBlack = document.querySelector('.vertical-black');
let horizontalBlack = document.querySelector('.horizontal-black');
home_Phone_V.onclick = () => {
    verticalBlack.style.zIndex == 1 ? verticalBlack.style.zIndex = -1 : verticalBlack.style.zIndex = 1;
}
home_Phone_H.onclick = () => {
    horizontalBlack.style.zIndex == 1 ? horizontalBlack.style.zIndex = -1 : horizontalBlack.style.zIndex = 1
}

// randomize portfolio images 

var portfolio_images = document.querySelector(".portfolio__img-container");

function randomIMG(event) {
    var portfolio_buttons = document.querySelectorAll(".button__categories");
    var imagesArray = portfolio_images.querySelectorAll("img");
    var target = event.target;
    var imgSRC = [];
    if (target.tagName == "BUTTON") {
        for (let btn of portfolio_buttons) {
            btn.classList.remove("button-active");
        }
        target.classList.add("button-active");
        for (let img of imagesArray) {
            imgSRC.push(img.src);
            img.src = "";
        }
        var randomArray = imgSRC.sort(function() {
            return Math.random() - 0.5;
        });
        for (let i = 0; i < imagesArray.length; i++)
            imagesArray[i].src = randomArray[i];
    }

}

// portfolio active image

portfolio_images.addEventListener("click", event => {
    let target = event.target;
    if (target.tagName == "IMG") {
        portfolio_images.querySelectorAll("img").forEach(item => {
            item.style.border = "none";
        });
        event.target.style.border = "5px solid #F06C64";
    }
});

// modal window

var form = document.getElementById("send__quote");
var modal_window = document.getElementById("send-letter_modal");
var close_modal = document.getElementById("close-modal");
var input_subject = document.getElementById("subject");
var details = document.getElementById("details");
var modal_content = document.getElementById("modal-content__letter");

form.onsubmit = function() {
    event.preventDefault();
    modal_window.style.display = "block";
    input_subject.value ? modal_content.innerHTML += `Тема: ${input_subject.value}` : modal_content.innerHTML = 'Без темы';
    details.value ? modal_content.innerHTML += `<br>Описание: ${details.value}` : modal_content.innerHTML += '<br>Без описания';
}

close_modal.onclick = function() {
    modal_window.style.display = "none";
    modal_content.innerHTML = '';
}

window.onclick = function(event) {
    if (event.target == modal_window) {
        modal_window.style.display = "none";
        modal_content.innerHTML = '';
    }
}