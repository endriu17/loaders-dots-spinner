'use strict';

const loaders = document.querySelector('.loaders-wrapper');
const pageText = document.querySelector('.loaded');

const loadPage = () => {
  if (!loaders.classList.contains('display')) {
    loaders.classList.toggle('display');
    pageText.classList.remove('display');
  } else {
    loaders.classList.remove('display');
    pageText.classList.toggle('display');
  }
};

// setInterval(3000, loadPage());
setInterval(function(){ loadPage(); }, 2000);
