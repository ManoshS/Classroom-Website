const db = require('../config/db');

const getRoleByName = (roleName) => {
  return db.query('SELECT id FROM roles WHERE role_name = ?', [roleName]);
};
const getRoleById = (id) => {
 
  return db.query('SELECT r.role_name  FROM users u JOIN roles r ON u.role_id = r.id WHERE u.id = ?;', [id]);
};

module.exports = { getRoleByName, getRoleById };