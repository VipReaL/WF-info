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
