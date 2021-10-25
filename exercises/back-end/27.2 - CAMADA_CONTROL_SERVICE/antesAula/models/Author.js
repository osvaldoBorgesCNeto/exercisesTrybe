const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) => {
      return authors.map(({ _id, firstName, middleName, lastName }) => {
        return {
          _id,
          firstName,
          middleName,
          lastName
        }
      });
    });
};

const findById = async (id) => {
  const author = await connection()
    .then((db) => db.collection('authors').findOne(ObjectId(id)));
  
  if (!author) return null;

  const { firstName, middleName, lastName } = author;

  return {
    id,
    firstName,
    middleName,
    lastName,
  };
};

const create = async (firstName, middleName, lastName) => {
  return connection()
    .then((db) => db.collection('authors').insertOne({firstName, middleName, lastName}))
};

const findByName = async (firstName, middleName, lastName) => {
  console.log(firstName, middleName, lastName);
  const query = middleName
    ? { firstName, middleName, lastName }
    : { firstName, lastName };
  
  const author = await connection()
    .then((db) => db.collection('authors').findOne(query));
  console.log(author);

  return author;
}

module.exports = {
  getAll,
  findById,
  create,
  findByName
};
