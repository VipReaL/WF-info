import './pages/index.css';

import { switchingTheme } from './scripts/themes';

import { getWarframeWorldStateData, getTestWarframeWorldStateData } from './scripts/api';


// Themes
document.addEventListener('DOMContentLoaded', switchingTheme);

// const getTest = getTestWarframeWorldStateData()
// console.log(getTest)

const getButton = document.querySelector('.getButton');
getButton.addEventListener('click', function () {
  getWarframeWorldStateData ()
    .then((data) => console.log(data))
    // сюда подставить функцию и передать ей нужные пораметры из data
})

// dropDownMenu

// const nav = document.querySelector('.site-navigation');

// // Находим все выподающие списки .menu
// const submenus = nav.querySelectorAll('.menu');

// // Скрываем все выподающие меню (hidden)
// submenus.forEach((item) => {
//   item.setAttribute('hidden', '')
// });

// const submenusButton = nav.querySelectorAll('.menu__btn');

// submenusButton.forEach((item) => {
//   item.addEventListener('click', function (event) {
//     const dropdown = event.target.closest('.site-navigation__item').querySelector('.menu');

//     toggleDropeDownMenu(item, dropdown);
//   });
// });

// function toggleDropeDownMenu (button, dropdown) {
//   if (button.getAttribute('aria-expanded') === 'true') {
//     button.setAttribute('aria-expanded', 'false');
//     dropdown.setAttribute('hidden', '');
//   } else {
//     button.setAttribute('aria-expanded', 'true');
//     dropdown.removeAttribute('hidden');
//   }
// }