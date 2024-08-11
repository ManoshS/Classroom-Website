const Classroom = require('../models/classroom');

exports.createClassroom = async (req, res) => {
    try {
        const classroom = req.body;
        const result = await Classroom.create(classroom);
        res.status(201).json({ message: 'Classroom created', classroom_id: result.insertId });
    } catch (err) {
        res.status(500).json({ errors: err.message });
    }
};

exports.getClassrooms = async (req, res) => {
    try {
        const results = await Classroom.findAll();
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getClassroomById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Classroom.findById(id);
        if (result.length === 0) {
            res.status(404).json({ message: 'Classroom not found' });
        } else {
            res.status(200).json(result[0]);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateClassroom = async (req, res) => {
    try {
        const id = req.params.id;
        const classroom = req.body;
        const result = await Classroom.update(id, classroom);
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Classroom not found' });
        } else {
            res.status(200).json({ message: 'Classroom updated' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteClassroom = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Classroom.delete(id);
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Classroom not found' });
        } else {
            res.status(200).json({ message: 'Classroom deleted' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
