'use strict';

const loaders = document.querySelector('.loaders-wrapper');
const pageText = document.querySelector('.loaded');

const loadPage = () => {
  setInterval(() => {
    if (!loaders.classList.contains('display')) {
      loaders.classList.toggle('display');
      pageText.classList.remove('display');
    } else {
      loaders.classList.remove('display');
      pageText.classList.toggle('display');
    }
  }, 3000);
};

loadPage();
