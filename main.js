'use strict';

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

window.onscroll = function() {
    stickMenu()
};

const navbar = document.querySelector('.navbar');
let sticky = navbar.offsetTop;

function stickMenu() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
}
