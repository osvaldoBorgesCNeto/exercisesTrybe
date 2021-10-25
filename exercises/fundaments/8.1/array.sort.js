// PART 01

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);

// PARTE 02

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers);

// PARTE 03

const points = [0, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); 

// PARTE 04

points.sort((a, b) => b - a);
console.log(points);
