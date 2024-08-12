const ClassroomStudent = require('../models/classroomStudent');

exports.addStudentToClassroom = async (req, res) => {
    try {
        const { classroom_id, student_id } = req.body;
        const result = await ClassroomStudent.addStudentToClassroom(classroom_id, student_id);
        res.status(201).json({ message: 'Classroom created', classroom_id: result.insertId });
    } catch (err) {
        res.status(500).json({ errors: err.message });
    }

};

exports.removeStudentFromClassroom = async (req, res) => {
    
    const classroom_id = req.params.classroom_id;
    const student_id = req.params.student_id;
    await ClassroomStudent.removeStudentFromClassroom(classroom_id, student_id, (err, result) => {
        if (err) throw err;
        res.status(200).json({ message: 'Student removed from classroom' });
    });
};

exports.getStudentsByClassroomId = async (req, res) => {
    try {
        const classroom_id = req.params.classroom_id;
        const results = await ClassroomStudent.findStudentsByClassroomId(classroom_id);
        if (results.length === 0) {
            res.status(404).json({ message: 'Classroom not found' });
        } else {
            res.status(200).json(results);
        }

    } catch (err) {
        res.status(500).json({ error: err.message });
    }

};

exports.updateClassroomStudent = async (req, res) => {
    
    try {
        const id = req.params.id;
        const { classroom_id, student_id } = req.body;
        const result = await ClassroomStudent.updateStudent(id, classroom_id, student_id);
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Classroom not found' });
        } else {
            res.status(200).json({ message: 'Classroom updated' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

};