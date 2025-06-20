const { v4: uuidv4 } = require('uuid');

let users = [];

class User {
  static create(userData) {
    const newUser = {
      id: uuidv4(),
      name: userData.name,
      email: userData.email
    };
    users.push(newUser);
    return newUser;
  }

  static findById(id) {
    return users.find(user => user.id === id);
  }

  static findByEmail(email) {
    return users.find(user => user.email === email);
  }

  static getAll() {
    return users;
  }
}

module.exports = User;