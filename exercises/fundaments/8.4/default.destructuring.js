// PARTE 01

// const person = {
//   name: "João",
//   lastName: "Jr",
//   age: 34
// };

// const { nationality = "Brazilian" } = person;
// console.log(nationality);

// const position2d = [1.0, 2.0];
// const [x, y, z = 0] = position2d;

// console.log(person);
// console.log(z);

// PRATIC

const nationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`

const person = {
    firstName: "João",
    lastName: "Jr II"
};

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
};

console.log(nationality(otherPerson));
console.log(nationality(person));

