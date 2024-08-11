const db = require('../config/db');

const getUserByUsername = (username) => {
  return db.query('SELECT * FROM users WHERE username = ?', [username]);
};

const createUser = (username, hashedPassword, roleId) => {
  return db.query('INSERT INTO users (username, password, role_id) VALUES (?, ?, ?)', [username, hashedPassword, roleId]);
};
const deleteStudentById = (id) => {
  return db.query('DELETE FROM users WHERE id = ? AND role_id = 1', [id]);
};
const deleteTeacherById = (id) => {
  return db.query('DELETE FROM users WHERE id = ? AND role_id = 2', [id]);
};
const updateStudentById = (id, username) => {
  return db.query('UPDATE users SET username  = ? WHERE id = ? AND role_id = 1', [username, id]);
};
const updateTeacherById = (id, username) => {
  return db.query('UPDATE users SET username  = ? WHERE id = ? AND role_id = 2', [username, id]);
};

const getAllStudents = () => {
  return db.query('SELECT * FROM users WHERE role_id=1');
};
const getAllTeachers = () => {
  return db.query('SELECT * FROM users WHERE role_id=2');
};
const getRole = (id) => {
  return db.query('SELECT role_id FROM users  WHERE id = ? ',[id]);
};

module.exports = {getRole,getUserByUsername, createUser, getAllStudents, getAllTeachers, deleteStudentById, deleteTeacherById, updateStudentById, updateTeacherById };