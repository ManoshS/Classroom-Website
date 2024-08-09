const db = require('../config/db');

const getRoleByName = (roleName) => {
  return db.query('SELECT id FROM roles WHERE role_name = ?', [roleName]);
};
const getRoleById = (id) => {
  return db.query('SELECT role_name FROM roles WHERE id = ?', [id]);
};

module.exports = { getRoleByName, getRoleById };