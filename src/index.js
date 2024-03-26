import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function preloadShrimp() {
  const shrimpImage = new Image();
  shrimpImage.src = '/shrimp.png';
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomPosition(n) {
  return (n / 2) - getRandomInt(n);
}

function shrimpAnimationEnd(target) {
  target.addEventListener("animationend", (event) => {
    target.remove();
  });
}

function flyShrimp(event) {
  const shrimpImage = new Image();
  shrimpImage.src = '/shrimp.png';
  shrimpImage.classList.add('🦐');
  shrimpImage.style.top = `${event.clientY + randomPosition(160)}px`;
  shrimpImage.style.left = `${event.clientX + randomPosition(160)}px`;
  shrimpAnimationEnd(shrimpImage);
  document.body.appendChild(shrimpImage);
}

function shrimps(event, number) {
  for(let i = 0; i < number; i = i + 1) {
    flyShrimp(event)
  }
}

function clickAnimation(event) {
  setTimeout(() => shrimps(event, 1), 0);
  setTimeout(() => shrimps(event, 3), 50);
  setTimeout(() => shrimps(event, 5), 150);
  setTimeout(() => shrimps(event, 7), 250);
}

let mouseDown = false;
let mousemove = false;
let timeout = null;
let interval = null;

function mousePressMoveAnimation(event) {
  if (!mouseDown) return;
  mousemove = true;
  if (timeout) {
    clearTimeout(timeout);
  }
  if (interval) {
    clearInterval(interval);
  }
  timeout = setTimeout(() => mousemove = false, 500);
  clickAnimation(event);
}

function mouseDownHandler(event) {
  mouseDown = true;
  if (mousemove) return;
  interval = setInterval(() => {
    clickAnimation(event);
  }, 250);
}

function mouseUpHandler(event) {
  mouseDown = false;
  if (interval) {
    clearInterval(interval);
  }
}

preloadShrimp();

// https://dev.to/jeetvora331/throttling-in-javascript-easiest-explanation-1081
function throttle(mainFunction, delay) {
  let timerFlag = null; // Variable to keep track of the timer
  // Returning a throttled version
  return (...args) => {
    if (timerFlag === null) { // If there is no timer currently running
      mainFunction(...args); // Execute the main function
        timerFlag = setTimeout(() => { // Set a timer to clear the timerFlag after the specified delay
        timerFlag = null; // Clear the timerFlag to allow the main function to be executed again
      }, delay);
    }
  };
}

document.body.addEventListener('click', clickAnimation, false);
document.body.addEventListener('mousedown', mouseDownHandler, false);
document.body.addEventListener('mouseup', mouseUpHandler, false);
document.body.addEventListener('mousemove', throttle(mousePressMoveAnimation, 50), false);
