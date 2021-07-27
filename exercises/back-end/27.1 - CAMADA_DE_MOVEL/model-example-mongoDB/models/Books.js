const { ObjectId } = require('mongodb');
const connection = require('./connection');

const serialize = (bookData) => {
  return {
    id: bookData.id,
    title: bookData.title,
    authorId: bookData.author_id,
  }
}

const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray())
    .then((books) => {
      return books.map(({ _id, title, author_id }) => {
        return {
          _id,
          title,
          authorId: author_id
        }
      })
    })
};

const findByAuthorId = async (id) => {
  const result = await connection()
    .then((db) => db.collection('books').findOne(ObjectId(id)))

  if (result.length === 0) return null;

  const { title, author_id } = result;

  return {
    id,
    title,
    authorId: author_id,
  };
};

const createBook = async (title, author_id) => {
  await connection()
    .then((db) => db.collection('books').insertOne({ title, author_id }))
  
  return null;
}

module.exports = {
  getAll,
  findByAuthorId,
  createBook,
};
