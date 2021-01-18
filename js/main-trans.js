"use strict";

var navToggler = document.querySelector('.nav-toggler');
var navTogglerSpan = document.querySelectorAll('.nav-toggler span');
var brand = document.querySelector('.nav-brand');
var links = document.querySelectorAll('.nav-list li');
var navList = document.querySelector('.nav-list');
var section = 'home';

function toggleNavColor() {
  setTimeout(function () {
    brand.classList.toggle('brand-active');
    navTogglerSpan.forEach(function (e) {
      e.classList.toggle('nav-toggler-active');
    });
    brand.classList.remove('hide-element');
    navTogglerSpan.forEach(function (e) {
      e.classList.remove('hide-element');
    });
  }, 400);
  brand.classList.add('hide-element');
  navTogglerSpan.forEach(function (e) {
    e.classList.add('hide-element');
  });
}

function showNav() {
  //document.querySelector('.home .about').classList.toggle('hide-element')
  document.querySelector(".background").classList.add('background-open');
  setTimeout(function () {
    navList.classList.add('list-open');
    toggleNavColor();
  }, 300);
  /* setTimeout(() => {
      brand.classList.toggle('brand-active')
      navTogglerSpan.forEach(e=>{
          e.classList.toggle('nav-toggler-active')
      })
  }, 300); */
}

function removeNav() {
  navList.classList.remove('list-open');
  setTimeout(function () {
    document.querySelector(".background").classList.remove('background-open');
    toggleNavColor();
  }, 300);
}

navToggler.addEventListener('click', function () {
  if (navList.classList.contains('list-open')) {
    removeNav();
  } else {
    showNav();
  }

  console.log(navList.classList);
});

function showSection(ele) {
  links.forEach(function (el) {
    return document.querySelector("#".concat(el.dataset.section)).style = "display:none;";
  });
  document.querySelector("#".concat(ele.dataset.section)).style = "display:block";
  document.body.classList.remove("".concat(section, "-colors"));
  document.body.classList.add("".concat(ele.dataset.section, "-colors"));
  section = ele.dataset.section;
  removeNav();
}

links.forEach(function (el) {
  el.onclick = function () {
    showSection(el);
  };
});

function init() {
  links.forEach(function (el) {
    return document.querySelector("#".concat(el.dataset.section)).style = "display:none;";
  });
  document.querySelector("#".concat(section)).style = "display:block";
  document.body.classList.add("".concat(section, "-colors"));
}

init();
