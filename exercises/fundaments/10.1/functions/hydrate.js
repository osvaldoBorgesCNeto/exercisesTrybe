function hydrate(string) {
  let number = string.match(/\d+/g);

  const totalCups = number.reduce((acc, curr) => acc + Math.abs(curr), 0)

  if (totalCups === 1) return `${totalCups} copo de água`;

  return `${totalCups} copos de água`;
}

module.exports = hydrate;
