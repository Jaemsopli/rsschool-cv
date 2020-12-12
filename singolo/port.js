
const turnOffTheScreen = document.querySelector('.button-circle');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slide = document.getElementsByClassName('slides');
slideIndex = 1;


showSlides(slideIndex);

function showSlides (n) {
    if (n < 1) {
        slideIndex = slide.length;
    } else if (n > slide.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }
    slide[slideIndex - 1].style.display = 'block';
}

function plusSlides (n) {
    showSlides(slideIndex += n);
}
function currentSlide (n) {
    showSlides(slideIndex = n)
}

prev.onclick = function () {
    plusSlides(-1);
}
next.onclick = function () {
    plusSlides(1);
}














document.getElementById("sidebar").classList.toggle('exit'); 

let btn = document.getElementsByClassName('button-circle');
let scr = document.getElementsByClassName('phone-picture');
for(let i = 0; i < btn.length; i++)
for(let i = 0; i < scr.length; i++)
btn[i].onclick = function()  {scr[i].classList.toggle('turn');}





