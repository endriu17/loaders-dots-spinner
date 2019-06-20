'use strict';

const loaders = document.querySelector('.loaders-wrapper');
const pageText = document.querySelector('.loaded');

const loadPage = () => {

  setInterval(() => {
    loaders.classList.toggle('display');
  }, 3000);
};

loadPage();
