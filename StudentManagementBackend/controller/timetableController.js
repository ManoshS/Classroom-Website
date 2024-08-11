const Timetable = require('../models/timetable');

exports.createTimetable = async (req, res) => {
    try {
        const timetable = req.body;
        const result = await Timetable.create(timetable)
        res.status(201).json({ message: 'Timetable created', timetable_id: result.insertId });
    } catch (err) {
        res.status(500).json({ errors: err.message });
    }

};

exports.getTimetablesByClassroomId = async (req, res) => {
    try {
        const classroom_id = req.params.classroom_id;
        const result = await Timetable.findAllByClassroomId(classroom_id);
        if (result.length === 0) {
            res.status(404).json({ message: 'Classroom not found' });
        } else {
            res.status(200).json(result[0]);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

};

exports.updateTimetable = async (req, res) => {
    try {
        const id = req.params.id;
        const timetable = req.body;
        const result = await Timetable.update(id, timetable);
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Timetable not found' });
        } else {
            res.status(200).json({ message: 'Timetable updated' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

};

exports.deleteTimetable = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Timetable.delete(id);
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Timetable not found' });
        } else {
            res.status(200).json({ message: 'Timetable deleted' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

};
