const db = require('../config/db');

const getUserByUsername = (username) => {
  return db.query('SELECT * FROM users WHERE username = ?', [username]);
};

const createUser = (username, hashedPassword, roleId) => {
  return db.query('INSERT INTO users (username, password, role_id) VALUES (?, ?, ?)', [username, hashedPassword, roleId]);
};

module.exports = { getUserByUsername, createUser };