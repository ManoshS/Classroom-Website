const express = require('express');
const router = express.Router();
const classroomStudentController = require('../controller/classroomStudentController');
const { authenticateToken, authorizeRole } = require('../middlewares/authMiddleware');

// Add student to classroom
router.post('/classroom-students', authenticateToken, authorizeRole(['teacher', 'principal']), classroomStudentController.addStudentToClassroom);

// Remove student from classroom
router.delete('/classroom/:classroom_id/students/:id', authenticateToken, authorizeRole(['teacher', 'principal']), classroomStudentController.removeStudentFromClassroom);

// Get all students in a classroom
router.get('/classroom-students/:classroom_id', authenticateToken, authorizeRole(['teacher', 'principal', 'student']), classroomStudentController.getStudentsByClassroomId);

router.put('/classroom-students/:id', authenticateToken, authorizeRole(['teacher', 'principal']), classroomStudentController.updateClassroomStudent);

module.exports = router;
