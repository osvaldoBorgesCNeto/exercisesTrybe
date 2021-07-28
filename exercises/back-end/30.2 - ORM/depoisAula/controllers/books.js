const { Books } = require('../models');

const getAll = async (req, res) => {
  const books = await Books.findAll();

  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const book = await Books.findByPk(id);

  res.status(200).json(book);
};

const createBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;

  await Books.create({ title, author, pageQuantity })

  res.status(201).json({ message: "Book criado!!!" });
};

const editBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;

    const [updateBook] = await User.update(
      { title, author, pageQuantity },
      { where: { id } },
    );

    console.log(updateBook);

    if(!updateBook) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.destroy(
      { where: { id } },
    );

    console.log(deleteUser)

    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
  editBook,
  deleteBook,
};
