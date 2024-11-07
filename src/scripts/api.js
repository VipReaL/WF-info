import { API_RU } from '../constants/constantsApi'

// Проверяем статус ответа сервера
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

// Преобразуем response в json
function json(response) {
  return response.json();
}

// Получить данные о состоянии мира Warframe для предоставленной платформы для RU региона
export function getWarframeWorldStateData () {
  return fetch(API_RU)
    .then(status)
    .then(json)
}

// Тест из локального файла получить данные о состоянии мира Warframe для предоставленной платформы для RU региона
export function getTestWarframeWorldStateData () {
  return require('../../source/json.json');
}

/*
Анимация пока страница не загрузилась
let isLoading = true
fetch(`https://swapi.dev/api/films/${id}/`).finally(function () {
  isLoading = false
})
*/