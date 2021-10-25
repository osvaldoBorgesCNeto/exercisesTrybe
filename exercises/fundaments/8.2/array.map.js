const persons = [
  { firstName: "Maria", lastName: "Ferreira" },
  { firstName: "João", lastName: "Silva" },
  { firstName: "Antonio", lastName: "Cabral" },
];

let fullNames = [];
for(let i = 0; i < persons.length; i += 1){
  fullNames.push(`${persons[i].firstName} ${persons[i].lastName}`);
}

console.log(fullNames);

// COM MAP

fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames);

// PARTE 02

const numbers = [1, 2, 3, 4, -5];

let negativeNumbers = [];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 0) {
    negativeNumbers.push(numbers[i] * -1);
  } else {
    negativeNumbers.push(numbers[i]);
  }
}

console.log(negativeNumbers);
console.log(numbers);

// COM MAP

negativeNumbers = numbers.map(number => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers);
console.log(numbers);

// PARTE 03

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => {
  return listProducts.map((product, index) => (
    { [product]: listPrices[index] }
  ));
};

const listProducts = updateProducts(products, prices);
console.log(listProducts);
