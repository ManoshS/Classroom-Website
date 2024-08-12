const express = require('express');
const router = express.Router();
const classroomController = require('../controller/classroomController');
const { authenticateToken, authorizeRole } = require('../middlewares/authMiddleware');

// Create Classroom
router.post('/classrooms',authenticateToken,authorizeRole(['teacher', 'principal']), classroomController.createClassroom);

// Get All Classrooms
router.get('/classrooms', authenticateToken,authorizeRole(['teacher', 'principal',,'student']),classroomController.getClassrooms);

// Get Classroom by ID
router.get('/classrooms/:id',authenticateToken, authorizeRole(['teacher', 'principal','student']),classroomController.getClassroomById);

// Update Classroom
router.put('/classrooms/:id',authenticateToken,authorizeRole(['teacher', 'principal']), classroomController.updateClassroom);

// Delete Classroom
router.delete('/classrooms/:id',authenticateToken,authorizeRole(['teacher', 'principal']), classroomController.deleteClassroom);

module.exports = router;
