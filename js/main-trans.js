"use strict";

var navToggler = document.querySelectorAll('.nav-toggler');
var links = document.querySelectorAll('.nav-list li');
var section = 'home';

function toggleNav() {
  document.querySelector(".".concat(section, " .background")).classList.toggle('background-open');
  document.querySelector(".".concat(section, " .nav-list")).classList.toggle('list-open');
}

function removeNav() {
  document.querySelector(".".concat(section, " .background")).classList.remove('background-open');
  document.querySelector(".".concat(section, " .nav-list")).classList.remove('list-open');
}

navToggler.forEach(function (el) {
  el.onclick = toggleNav;
});

function showSection(ele) {
  links.forEach(function (el) {
    return document.querySelector("#".concat(el.dataset.section)).style = "display:none;";
  });
  document.querySelector("#".concat(ele.dataset.section)).style = "display:block";
  section = ele.dataset.section;
  removeNav();
}

links.forEach(function (el) {
  el.onclick = function () {
    showSection(el);
  };
});
