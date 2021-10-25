const Author = require('../models/Author');

const newAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName].filter(name => name).join(" ");

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName
  }
}

const isValid = (firstName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;

  return true;
}

const getAll = async () => {
  const authors = await Author.getAll();

  return authors.map(newAuthor);
}

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: `N'ao encontramos ninguem com esse id: ${id}`,
      },
    };
  }

  return newAuthor(author);
}

const create = async (firstName, middleName, lastName) => {
  const authorValid = isValid(firstName, lastName);
   
  if (!authorValid) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Dados invalidos',
      },
    };
  }
  
  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Um autor já existe com esse nome completo',
      },
    };
  }

  const { insertedId } = await Author.create(firstName, middleName, lastName);

  return newAuthor({
    id: insertedId,
    firstName,
    middleName,
    lastName
  });
}

module.exports = {
  newAuthor,
  isValid,
  getAll,
  findById,
  create
};