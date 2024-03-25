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
  shrimpImage.style.top = `${event.offsetY + randomPosition(160)}px`;
  shrimpImage.style.left = `${event.offsetX - 5 + randomPosition(160)}px`;
  shrimpAnimationEnd(shrimpImage);
  document.body.appendChild(shrimpImage);
}

function clickAnimation(event) {
  flyShrimp(event);
  flyShrimp(event);
  flyShrimp(event);
  flyShrimp(event);
  flyShrimp(event);
  flyShrimp(event);
}

preloadShrimp();
document.body.addEventListener('click', clickAnimation, false)
