// PARTE 01

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas'
};

const { seller } = product;
console.log(seller); 

// PARTE 02

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a:name , b:classAssigned, c:subject } = student;

console.log(name);
console.log(classAssigned);
console.log(subject);

// PARTE 03

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`)
};

printProductDetails(product); 
