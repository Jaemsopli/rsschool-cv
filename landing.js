
  // DOM Elements
const time = document.getElementById('time');
let greeting = document.getElementById('greeting');
let name = document.getElementById('name');
let focus = document.getElementById('focus');

// Options
const showAmPm = true;

// Show Time
function showTime() {
let today = new Date(),
  hour = today.getHours(),
  min = today.getMinutes(),
  sec = today.getSeconds();

// Set AM or PM
const amPm = hour >= 12 ? 'PM' : 'AM';

// 12hr Format
hour = hour % 24 || 12;

// Output Time
time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
  sec
)} ${showAmPm ? amPm : ''}`;

setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
let today = new Date(),
  hour = today.getHours();

if (hour < 12) {
  // Morning
  document.body.style.backgroundImage = "url('/rsschool-cv/Landing_page/picture/Morning.jpg')";
  document.body.style.backgroundRepeat="no-repeat";
  document.body.style.backgroundSize="100%";
  greeting.textContent = 'Доброе утро, ';
} else if (hour < 17) {
  // Afternoon
  document.body.style.backgroundImage = "url('/rsschool-cv/Landing_page/picture/Day.jpg')";
  document.body.style.backgroundRepeat="no-repeat";
  document.body.style.backgroundSize="100%";
  greeting.textContent = 'Добрый день, ';
} else if (hour < 22) {
  // Evening
  document.body.style.backgroundImage = "url('/rsschool-cv/Landing_page/picture/Evening.jpg')";
  document.body.style.backgroundRepeat="no-repeat";
  document.body.style.backgroundSize="100%";
  greeting.textContent = 'Добрый вечер, ';
  document.body.style.color = 'white';
// Night
} else {
  document.body.style.backgroundImage = "url('/rsschool-cv/Landing_page/picture/Night.jpg')";
  document.body.style.backgroundRepeat="no-repeat";
  document.body.style.backgroundSize="100%";
  greeting.textContent = 'Доброй ночи, ';
  document.body.style.color = 'white';
 }
}

// Get Name
function getName() {
if (localStorage.getItem('name') === '') {
  name.textContent = '[Enter Name]';
} else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
if (e.type === 'keypress') {
  // Make sure enter is pressed
  if (e.which == 13 || e.keyCode == 13) {
    localStorage.setItem('name', e.target.innerText);
    name.blur();
  }
} else {
  localStorage.setItem('name', e.target.innerText);
}
}

// Get Focus
function getFocus() {
if (localStorage.getItem('focus') === '') {
  focus.textContent = '[Enter Focus]';
} else {
  focus.textContent = localStorage.getItem('focus');
}
}

// Set Focus
function setFocus(e) {
if (e.type === 'keypress') {
  // Make sure enter is pressed
  if (e.which == 13 || e.keyCode == 13) {
    localStorage.setItem('focus', e.target.innerText);
    focus.blur();
  }
} else {
  localStorage.setItem('focus', e.target.innerText);
}
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
