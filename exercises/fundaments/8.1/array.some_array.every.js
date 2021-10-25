const notes = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyNotes = (studentNotes) => {
  return Object.values(studentNotes).every((note) => note === 'Aprovado');
};

console.log(verifyNotes(notes));

const verifySome = (studentNotes) => {
  return Object.values(studentNotes).some((note) => note === 'Aprovado');
};

console.log(verifySome(notes));