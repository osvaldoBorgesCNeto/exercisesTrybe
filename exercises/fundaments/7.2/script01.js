// PARTE 01 - 01/05
console.log('Exercicio 01');

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
newKey = 'secondJob';
const secondJob = 'juniorFullStask';
customer[newKey] = secondJob;
console.log(customer);

// PARTE 01 - 02/05 (Object.keys)
console.log('Exercicio 02 - Object.keys');

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = student => {
  const arrayOfSkills = Object.keys(student);
  for (let index in arrayOfSkills) {
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

listSkills(student1);

// PARTE 01 - 03/05 (Object.values)
console.log('Exercicio 03 - Object.values');

const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsWithFor(student));

// Com Object.values
console.log(listSkillsWithValues(student));

// PARTE 01 - 04/05 (Object.entries)
console.log('Exercicio 04 - Object.entries');

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(let index in pairKeyValue) {
  console.log('--------');
  console.log(`Pais: ${pairKeyValue[index][0]}`);
  console.log(`Capital: ${pairKeyValue[index][1]}`);
};

// PARTE 01 - 05/05 (Object.assign)
console.log('Exercicio 05 - Object.assign');

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

// IDEAL colocar o {} primeiro

const personNew = {
  name:'Roberto',
};

const lastNameNew = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},personNew,lastNameNew);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);