// PARTE 02 - 01/04

const fatorial = num => {
  let result = 1;
  for (let index = 1; index <= num; index += 1) {
    result *= index;
  }
  return result
}

console.log(fatorial(4));

// PARTE 02 - 02/04

const longestWord = "Antônio foi no banheiro e não sabemos o que aconteceu";

const bigWorld = string => {
  let wordBig = '';
  let stringSplit = string.split(' ');
  for (const word of stringSplit) {
    if (word.trim().length > wordBig.length) {
      wordBig = word.trim();
    }
  }
  return wordBig;
} 

console.log(bigWorld(longestWord));

// PARTE 02 03/04

// let count = 0

// const button = document.querySelector('#button');
// const sumClick = document.querySelector('#clicks');

// button.addEventListener('click', () => sumClick.innerHTML = (count += 1));

// PARTE 02 - 04/04

const stringMain = 'Tryber x aqui!';
const parametro = 'Osvaldo';
const skills = ['JavaScript', 'HTML', 'CSS', 'DOM'];

const stringX = (string, name) => {
  let wordX = '';
  let stringSplit = string.split(' ');
  for (let word of stringSplit) {
    if (word === 'x') {
      wordX += ` ${name} `;
    } else {
      wordX += word;
    }
  }

  let resultString = `${wordX} 
  Minhas habilidades sao:`;

  skills.forEach((skills) => {
    resultString = `${resultString}
    ${skills}`
  })

  return resultString;
}

console.log(stringX(stringMain, parametro));
