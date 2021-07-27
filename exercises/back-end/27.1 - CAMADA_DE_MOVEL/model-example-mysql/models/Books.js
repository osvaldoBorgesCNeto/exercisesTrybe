const connection = require('./connection');

const serialize = (bookData) => {
  return {
    id: bookData.id,
    title: bookData.title,
    authorId: bookData.author_id,
  }
}

const getAll = async () => {
  const [result] = await connection.execute('SELECT id, title, author_id FROM books');

  return result.map(serialize);
};

const findByAuthorId = async (authorId) => {
  const query = 'SELECT id, title, author_id FROM model_example.books WHERE author_id = ?';
  const [result] = await connection.execute(query, [authorId])

  if (!result) return null;

  return result.map(serialize);
};

const createBook = async (title, author_id) => {
  const query = 'INSERT INTO model_example.books (title, author_id) VALUES (?,?)';
  await connection.execute(query, [title, author_id])
  
  return null;
}

module.exports = {
  getAll,
  findByAuthorId,
  createBook,
};
