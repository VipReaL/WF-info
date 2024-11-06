import './pages/index.css';

import { API_RU } from './constants/constantsApi';
import { api } from './scripts/api';


function status(response) {
  if (response.status >= 200 && response.status < 300) {
    console.log(response.status)
    return Promise.resolve(response)
  } else {
    console.log(response.status)
    console.log(response.statusText)
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response) {
  return response.json();
}

fetch()
  .then(status)
  .then(json)
  .then((data) => {
    console.log(data);
    dataObj = data;
  })
  .catch((err) => {
    console.log('Опять что то не работает ', err);
  })
  .finally(() => console.log('finally'))


// const as = require('../source/json.json');
// console.log(as)

/*
let isLoading = true
fetch(`https://swapi.dev/api/films/${id}/`).finally(function () {
  isLoading = false
})
*/


function changeTheme(theme) {
  document.documentElement.className = '';
  document.documentElement.classList.add(`theme-${theme}`);
  localStorage.setItem('theme', theme);
}

(function initTheme() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    changeTheme(theme);
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const themeButtons = document.querySelectorAll('.theme-menu__button');

  function setDisabled(theme) {
    themeButtons.forEach((item) => {
      if (item.getAttribute('data-theme') === theme) {
        item.setAttribute('disabled', true);
      } else {
        item.removeAttribute('disabled');
      }
    });
  }

  if ([...root.classList].includes('theme-light')) {
    setDisabled('light');
  } else if ([...root.classList].includes('theme-dark')) {
    setDisabled('dark');
  } else {
    setDisabled('auto');
  }

  themeButtons.forEach((button) => {
    button.onclick = () => {
      changeTheme(button.getAttribute('data-theme'));
      setDisabled(button.getAttribute('data-theme'));
    };
  });
});
