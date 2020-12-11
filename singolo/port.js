
const turnOffTheScreen = document.querySelector('.button-circle');
const screen = document.querySelector('.phone-picture');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const blue = document.querySelector('.background-container-2');
const roz = document.querySelector('.background-container');


document.getElementById("sidebar").classList.toggle('exit'); 

let btn = document.getElementsByClassName('button-circle');
let scr = document.getElementsByClassName('phone-picture');
for(let i = 0; i < btn.length; i++)
for(let i = 0; i < scr.length; i++)
btn[i].onclick = function()  {scr[i].classList.toggle('turn');}
    
//next.onclick = function()  {blue.classList.remove('disable');}  работает неккоретно
//next.onclick = function()  {roz.classList.toggle('disable');}



// turnOffTheScreen.onclick = function() {screen.classList.toggle('turn');}

/*i = 0;
fon.onclick = function() {
    this.style.background = 'blue';
this.style.background = 'red';
  i++;
}

let counter = 1;
const size = slideImg[0].clientWidth;
slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', ()=> {
if (counter >= slideImg.length - 1) return;
slide.style.transition = "transform 0.4s ease-in-out";
counter++;
slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', ()=> {
if (counter <= 0) return;
slide.style.transition = "transform 0.4s ease-in-out";
counter--;
slide.style.transform = 'translateX(' + ( -size * counter ) + 'px)';
});

slide.addEventListener('transitionend', ()=> {
if (slideImg[counter].id === 'last') {
slide.style.transition = "none";
counter = slideImg.length -2;
slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
if (slideImg[counter].id === 'first') {
slide.style.transition = "none";
counter = slideImg.length - counter;
slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
});



/*{
 {
    console.log(slideImg[i]);
    
}
}
*/




