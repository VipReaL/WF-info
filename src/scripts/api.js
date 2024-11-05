export function api(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
}
