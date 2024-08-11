const express = require('express');
const { authenticateToken, authorizeRole } = require('../middlewares/authMiddleware');
const { getAllStudents, getAllTeachers, updateStudentById, updateTeacherById, deleteStudentById, deleteTeacherById, getRole } = require("../models/userModel")

const router = express.Router();

router.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: `Hello, ${req.user.username}!`, user: req.user });
});

router.get('/student-dashboard', authenticateToken, authorizeRole(['student', 'teacher', 'principal']), (req, res) => {
  res.json({ message: 'Welcome to the student dashboard' });
});

router.get('/teacher-dashboard', authenticateToken, authorizeRole(['teacher', 'principal']), (req, res) => {
  res.json({ message: 'Welcome to the teacher dashboard' });
});

router.get('/principal-dashboard', authenticateToken, authorizeRole(['principal']), (req, res) => {
  res.json({ message: 'Welcome to the principal dashboard' });
});

router.get('/list-students', authenticateToken, authorizeRole(['principal', 'teacher']), async (req, res) => {
  const students = await getAllStudents();
  console.log(students)
  if (students[0].length === 0)
    res.status(404).json({ message: 'No students found' });
  else
    res.json(students);
});
router.get('/list-teachers', authenticateToken, authorizeRole(['principal']), async (req, res) => {
  const teachers = await getAllTeachers();
  if (teachers[0].length === 0)
    res.status(404).json({ message: 'No Teachers found' });
  else
    res.json(teachers);
});

router.put('/students/:id', authenticateToken, authorizeRole(['principal', 'teacher']), async (req, res) => {
  const result = await updateStudentById(req.params.id, req.body.username)
  if (result.affectedRows === 0) {
    res.status(404).json({ message: 'Student not found' });
  } else {
    res.status(200).json({ message: 'Student updated' });
  }
});
router.put('/teachers/:id', authenticateToken, authorizeRole(['principal']), async (req, res) => {
  const result = await updateTeacherById(req.params.id, req.body.username)
  if (result.affectedRows === 0) {
    res.status(404).json({ message: 'Teacher not found' });
  } else {
    res.status(200).json({ message: 'Teacher updated' });
  }
});
router.delete('/students/:id', authenticateToken, authorizeRole(['principal', 'teacher']), async (req, res) => {
  const result = await deleteStudentById(req.params.id, req.body.username)
  if (result.affectedRows === 0) {
    res.status(404).json({ message: 'Student not found' });
  } else {
    res.status(200).json({ message: 'Student Deleted' });
  }
});
router.delete('/teachers/:id', authenticateToken, authorizeRole(['principal']), async (req, res) => {
  const result = await deleteTeacherById(req.params.id, req.body.username)
  if (result.affectedRows === 0) {
    res.status(404).json({ message: 'Teacher not found' });
  } else {
    res.status(200).json({ message: 'Teacher Deleted' });
  }
});
router.get('/roles/:id', async (req, res) => {
  r = await getRole(req.params.id);
  console.log(r)
  let CurrRole = "";
  if (r == 1) {
    CurrRole = "Student"
  }
  else if (r == 2)
    CurrRole = "Teacher"
  else
    CurrRole = "Principal"
  res.json({ role: CurrRole });
});
module.exports = router;
