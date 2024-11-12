import './pages/index.css';

import { switchingTheme } from './scripts/themes';

import { getWarframeWorldStateData, getTestWarframeWorldStateData } from './scripts/api';


// Themes
document.addEventListener('DOMContentLoaded', switchingTheme);

// const getTest = getTestWarframeWorldStateData()
// console.log(getTest)

const getButton = document.querySelector('.getButton');
getButton.addEventListener('click', function () {
  getWarframeWorldStateData()
    .then((data) => console.log(data))
  // сюда подставить функцию и передать ей нужные пораметры из data
})

// dropDownMenu

// находим раздел навигации
const nav = document.querySelector('.site-navigation');
nav.classList.add('enhanced');
// console.log(nav)

// находим кнопки раскрытия меню
const submenus = nav.querySelectorAll('.menu-dropdown[data-has-children]');
// console.log(submenus);

// находим выподающий список меню
const dropdowns = nav.querySelectorAll('.menu-dropdown[data-has-children] > .menu-dropdown__list');
// console.log(dropdowns);


submenus.forEach((item) => {
  const dropdown = item.querySelector(':scope > .menu-dropdown__list');
  // console.log(dropdown);

  // Скрываем все выподающие меню при загрузке страницы (hidden)
  dropdown.setAttribute('hidden', '');

  const button = item.querySelector(':scope > .menu-dropdown__btn')
  // console.log(button);

  // раскрываем-скрываем меню при клике
  button.addEventListener('click', function () {
    toggleDropdown(button, dropdown);
  })

  // Обрабатываем нажатие на Esc



});

function toggleDropdown(button, dropdown) {
  if (button.getAttribute('aria-expanded') === 'true') {
    button.setAttribute('aria-expanded', 'false');
    dropdown.setAttribute('hidden', '');
  } else {
    button.setAttribute('aria-expanded', 'true');
    dropdown.removeAttribute('hidden');
  }
}

function focusIsInside(element) {
  return element.contains(document.activeElement)
}

// Закрываем навигацию, если кликнули вне навигации
function collapseDropdownsWhenClickingOutsideNav(e) {
  const target = e.target

  dropdowns.forEach(function (dropdown) {
    if (!dropdown.parentElement.contains(target)) {
      dropdown.setAttribute('hidden', '')
      const btn = dropdown.parentNode.querySelector('.menu-dropdown__btn')
      btn.setAttribute('aria-expanded', 'false')
    }
  });
}

// Закрываем навигацию, если кликнули вне навигации
window.addEventListener('click', collapseDropdownsWhenClickingOutsideNav)