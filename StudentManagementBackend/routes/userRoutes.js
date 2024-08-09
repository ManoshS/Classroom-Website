const express = require('express');
const { authenticateToken, authorizeRole } = require('../middlewares/authMiddleware');

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

module.exports = router;
