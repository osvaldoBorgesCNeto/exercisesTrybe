// NORMAL

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];

console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);
console.log(fourthCountry);

// DESTRUCTURING

const [ firstCountry, secondCountry, thirdCountry, fourthCountry ] = arrayCountries;

console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);
console.log(fourthCountry);