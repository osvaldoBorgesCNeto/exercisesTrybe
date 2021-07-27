const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getUsers = async () => {
  return connection()
    .then((db) => db.collection('users').find().toArray())
    .then((users) => {
      return users.map(({ _id, firstName, lastName, email }) => {
        return {
          id: _id,
          firstName,
          lastName,
          email,
        }
      })
    })
};

const findUserId = async (id) => {
  return connection()
    .then((db) => db.collection('users').findOne(ObjectId(id)))
    .then((result) => result);
};

const createUsers = async (firstName, lastName, email, password) => {
  const newUser = await connection()
    .then((db) => db.collection('users')
    .insertOne({ firstName, lastName, email, password }))
    .then((result) => ({ id: result.insertedId, firstName, lastName, email }))

  return newUser;
};

const editUser = async (id, firstName, lastName, email, password) => {
  const newUser = await connection()
    .then((db) => db.collection('users')
    .findOneAndUpdate({ _id: ObjectId(id) }, {$set: { firstName, lastName, email, password} }, {returnOriginal: false}))
    .then((result) => result.value)
  
  return newUser;
}

module.exports = {
  getUsers,
  createUsers,
  findUserId,
  editUser,
}