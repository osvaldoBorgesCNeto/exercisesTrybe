const API_URL = 'https://icanhazdadjoke.com/';

const phraseHTML = phraseText => {
  const phrase = document.querySelector('#jokeContainer');
  phrase.innerHTML = phraseText;
}

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = () => {
  // Adicionar lógica aqui!
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => phraseHTML(data.joke));
};


window.onload = () => fetchJoke();