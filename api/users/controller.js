let config = require('../config')
let users = config.getDB().get('users');

function getUsers() {
  return users;
}

function getUser(id) {
  return users.find((user) => user.id === Number(id));
}

function createUser(user) {
  users.push(user);
}

function deleteUser(id) {
  users = users.remove({id: Number(id)}).write();
}

module.exports = {
  getUser,
  getUsers,
  createUser,
  deleteUser,
};
