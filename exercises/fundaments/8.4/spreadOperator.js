// PARTE 01

const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray);
console.log(numbers);

// PARTE 02

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);
console.log(...months);

// PARTE 03

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo));

// parte 04

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers));
console.log(Math.min(...randomNumbers));

// PARTE 05

const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: "Developer",
};

const customer = {...people, ...about};
console.log(customer);

// PRATIC

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Pera', 'Melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Abacaxi', 'Morango', 'Uva'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const resultFruit = [...fruit, ...additional];
  return resultFruit;
};

console.log(fruitSalad(specialFruit, additionalItens));