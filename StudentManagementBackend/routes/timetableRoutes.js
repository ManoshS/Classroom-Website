const express = require('express');
const router = express.Router();
const timetableController = require('../controller/timetableController');
const { authenticateToken, authorizeRole } = require('../middlewares/authMiddleware');

// Create Timetable
router.post('/timetables',authenticateToken,authorizeRole(['teacher', 'principal']), timetableController.createTimetable);

// Get all Timetables for a Classroom
router.get('/timetables/:classroom_id',authenticateToken,authorizeRole(['teacher', 'principal']), timetableController.getTimetablesByClassroomId);

// Update Timetable
router.put('/timetables/:id',authenticateToken,authorizeRole(['teacher', 'principal']), timetableController.updateTimetable);

// Delete Timetable
router.delete('/timetables/:id',authenticateToken,authorizeRole(['teacher', 'principal']), timetableController.deleteTimetable);

module.exports = router;
