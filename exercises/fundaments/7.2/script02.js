// PARTE 02 01/02
console.log('----- Exercicio 01 -----');

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const phrase = `Ola ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone ${order.phoneNumber}, ${order.address.street}, Nº:${order.address.number}, AP:${order.address.apartment}`;
  return phrase;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.order.delivery.deliveryPerson = 'Luiz Silva';
  order.payment.total = 50;
  order.order.pizza.muzzarella = {};
  order.order.pizza.muzzarella.amount = 1;
  order.order.pizza.muzzarella.price = 20;  
  order.order.pizza.calabresa = {};
  order.order.pizza.calabresa.amount = 1;
  order.order.pizza.calabresa.price = 20;

  const phrase = `Ola ${order.order.delivery.deliveryPerson}, o total do seu pedido de ${Object.keys(order.order.pizza)} e ${order.order.drinks.coke.type} é R$ ${order.payment.total}`;
  return phrase
}

console.log(orderModifier(order));

// PARTE 02 02/02
console.log('----- Exercicio 02 -----');

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercicio 01
console.log('Exercicio 01');

const addLesson2 = thing => {
 thing.turno = 'manhã';
 return thing;
}

console.log(addLesson2(lesson2));

// Exercicio 02
console.log('Exercicio 02');

const listObject = object => {
  const list = Object.keys(object);
  return list;
}

console.log(listObject(lesson3));

// Exercicio 03
console.log('Exercicio 03');

const sizeObject = object => {
  const size = Object.keys(object).length;
  return size;
}

console.log(sizeObject(lesson1));

// Exercicio 04
console.log('Exercicio 04');

const valueObject = object => {
  const value = Object.values(object);
  return value;
}

console.log(valueObject(lesson2));

// Exercicio 05
console.log('Exercicio 05');

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

// Exercicio 06
console.log('Exercicio 06');

const sum = ((allLessons.lesson1.numeroEstudantes) + (allLessons.lesson2.numeroEstudantes) + (allLessons.lesson3.numeroEstudantes));

console.log(sum);

// Exercicio 07
console.log('Exercicio 07');

const valuePosition = (object, number) => {
  const value = Object.values(object);
  return value[number];
}

console.log(valuePosition(lesson1, 0));

// Exercicio 08
console.log('Exercicio 08');

const checkObject = (object, key, value) => {
  const keys = Object.keys(object);
  let bool = false;
  for (let index in keys) {
    if (keys[index] === key && object[key] === value) {
      bool = true;
    }
  }
  return bool;
}

console.log(checkObject(lesson3, 'materia', 'Matemática'));

// BONUS 01
console.log('Bonus 01');

const sumMat = object => {
  const keys = Object.keys(object);
  let sum = 0;

  for (let index in keys) {
    if (object[keys[index]].materia === 'Matemática') {
      sum += Object.values(object)[index].numeroEstudantes;
    }
  }
  return sum;
}

console.log(sumMat(allLessons));

// BONUS 02
console.log('Bonus 02');

const info = (object, name) => {
  let sumStudent = 0;
  const keys = Object.keys(object);
  let aulas = [];
  for (let index in keys) {
    if (object[keys[index]].professor === name) {
      sumStudent += Object.values(object)[index].numeroEstudantes;
      aulas.push(Object.values(object)[index].materia);
    }
  }
  return {aulas: aulas, estudantes: sumStudent};
}

const infoObject = (object, name) => {
  const infoFinal = {};
  infoFinal.professor = name;
  Object.assign(infoFinal, info(object, name));

  return infoFinal;
}

console.log(infoObject(allLessons, 'Maria Clara'));