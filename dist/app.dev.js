"use strict";

var sections = document.querySelectorAll('.section');
var sectBtns = document.querySelectorAll('.controlls');
var sectBtn = document.querySelectorAll('.control');
var allSections = document.querySelector('.main-content');

function PageTransitions() {
  // Buttons Click Active Class.
  for (var i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      var currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    });
  } // Sections Active.


  allSections.addEventListener('click', function (e) {
    var id = e.target.dataset.id;

    if (id) {
      // Remove Selected From The Other BUttons.
      sectBtns.forEach(function (btn) {
        btn.classList.remove('active');
      });
      e.target.classList.add('active'); // Hide Other Sections.

      sections.forEach(function (section) {
        section.classList.remove('active');
      });
      var element = document.getElementById(id);
      element.classList.add('active');
    }
  }); // Toggle Theme.

  var themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', function () {
    var element = document.body;
    element.classList.toggle('light-mode');
  });
}

PageTransitions();