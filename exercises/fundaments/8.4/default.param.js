// PARTE 01

const greeting01 = (user) => console.log(`Welcome ${user}!`);

greeting01();

// PARTE 02

const greeting02 = (user) => {
  user = typeof user === 'undefined' ? 'usuário' : user;
  console.log(`Welcome ${user}!`);
};

greeting02();

// MELHOR JEITO

const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting();

// PRATIC 

const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value;
};

console.log(multiply(8));