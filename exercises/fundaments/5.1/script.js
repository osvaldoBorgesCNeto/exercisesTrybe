// Exercicio 01
function changeText() {
    let paragraphs = document.getElementsByTagName('p');
    paragraphs[1].innerText = 'Descricao de como voce se ve daqui 2 anos.';
}
changeText();
// Exercicio 02
function changeSquareColorToGreen() {
    let square = document.getElementsByClassName('main-content');
    square[0].style.backgroundColor = 'rgb(76, 164,109)';
}
changeSquareColorToGreen()

// Exercicio 03
function changeSquareColorToWhite() {
    let square = document.getElementsByClassName('center-content');
    square[0].style.backgroundColor = 'white';
}
changeSquareColorToWhite();

// Exercicio 04
function correctText() {
    let text = document.getElementsByTagName('h1');
    text[0].innerText = 'Exercício 5.1 - JavaScript';
}
correctText();

// Exercicio 05
function changeTextForUpperCase() {
    let paragraphs = document.getElementsByTagName('p');
    for (let contador = 0; contador < document.getElementsByTagName('p').length; contador += 1) {
        paragraphs[contador].innerText = paragraphs[contador].innerText.toUpperCase();
    }
}
changeTextForUpperCase();

// Exercicio 06
function seeConsole() {
    let paragraphs = document.getElementsByTagName('p');
    for (let contador = 0; contador < document.getElementsByTagName('p').length; contador += 1) {
        console.log(paragraphs[contador]);
    }
}
seeConsole();