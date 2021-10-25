const firstFunct = a => a.toUpperCase();
const secondFunct = a => a.substr(0, 1);
const thirdFunct = (a, b, c) => a.concat(b, c);

module.exports = { firstFunct, secondFunct, thirdFunct };