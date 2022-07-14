"use strict";

document.querySelector('body').addEventListener('click', function (ev) {
  if (ev.target.classList.contains('nav-mobile')) {
    ev.target.classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('active');
  }

  if (ev.target.classList.contains('nav-mobile__item')) {
    ev.target.parentNode.classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('active');
  }

  if (ev.target.classList.contains('header__nav-link')) {
    document.querySelector('.nav-mobile').classList.remove('active');
    document.querySelector('.header__nav').classList.remove('active');
  }
}); //================================================

var image1 = document.getElementsByClassName('thumbnail1');
new simpleParallax(image1, {
  overflow: true
});
var image2 = document.getElementsByClassName('thumbnail2');
new simpleParallax(image2, {
  overflow: true,
  orientation: 'left'
});