function elementoOndeVoceEsta() {
    let elementoVoce = document.querySelector('#elementoOndeVoceEsta');
    return elementoVoce
}
elementoOndeVoceEsta();

// Exercicio 02
function elementoPai() {
    elementoOndeVoceEsta().parentNode.style.color = 'green';
}
elementoPai();

// Exercicio 03
function primeiroFilhoFilhoEscrever() {
    elementoOndeVoceEsta().firstElementChild.innerText = 'Ola Mundo';
}
primeiroFilhoFilhoEscrever();

// Exercicio 04
function primeiroFilhoPeloPai() {
    let elementoFilhoPeloPai = elementoOndeVoceEsta().parentNode.firstElementChild;
    return elementoFilhoPeloPai;
}
primeiroFilhoPeloPai();

// Exercicio 05
function primeiroFilho() {
    let elementoFilho = elementoOndeVoceEsta().previousElementSibling;
    return elementoFilho;
}
primeiroFilho();

// Exercicio 06
function proximoNo() {
    elementoOndeVoceEsta().nextSibling;
}
proximoNo();

// Exercicio 07
function terceiroFilho() {
    elementoOndeVoceEsta().nextElementSibling = 'Terceiro Filho';
}
terceiroFilho();

// Exercicio 08
function terceiroFilhoPeloPai() {
    elementoOndeVoceEsta().parentNode.childNodes[5];
}
terceiroFilhoPeloPai();

// Parte 02
// Exercicio 01

let createSibling = document.createElement('div');
elementoOndeVoceEsta().parentNode.appendChild(createSibling);
elementoOndeVoceEsta().parentNode.lastChild.innerText = 'Irmao do OndeVoceEsta';

// Exercicio 02

let createChild = document.createElement('div');
elementoOndeVoceEsta().appendChild(createChild);
elementoOndeVoceEsta().lastChild.innerText = 'Filho do Filho';

// Exercicio 03

let createChildChild = document.createElement('div');
elementoOndeVoceEsta().firstElementChild.appendChild(createChildChild);
elementoOndeVoceEsta().firstElementChild.firstElementChild.innerText = "Filho do FilhoFilho";

// Exercicio 04

elementoOndeVoceEsta().firstElementChild.firstElementChild.parentNode.parentNode.parentNode.childNodes[5];


// Parte 03
// Exercicio 01

let element = document.querySelectorAll('div');

for (let contador = 0; contador < element.length; contador += 1) {
    let remove = element[contador];
    console.log(remove);
    
}