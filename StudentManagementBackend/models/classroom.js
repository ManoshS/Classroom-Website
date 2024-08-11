const db = require('../config/db');

const Classroom = {
    create: async (classroom) => {
        const query = `INSERT INTO Classroom (class_name, teacher_id, start_time, end_time) VALUES (?, ?, ?, ?)`;
        const [result] = await db.query(query, [classroom.class_name, classroom.teacher_id, classroom.start_time, classroom.end_time]);
        return result;
    },

    findAll: async () => {
        const query = `SELECT * FROM Classroom`;
        const [results] = await db.query(query);
        return results;
    },

    findById: async (id) => {
        const query = `SELECT * FROM Classroom WHERE classroom_id = ?`;
        const [result] = await db.query(query, [id]);
        return result;
    },

    update: async (id, classroom) => {
        const query = `UPDATE Classroom SET class_name = ?, teacher_id = ?, start_time = ?, end_time = ? WHERE classroom_id = ?`;
        const [result] = await db.query(query, [classroom.class_name, classroom.teacher_id, classroom.start_time, classroom.end_time, id]);
        return result;
    },

    delete: async (id) => {
        const query = `DELETE FROM Classroom WHERE classroom_id = ?`;
        const [result] = await db.query(query, [id]);
        return result;
    }
};

module.exports = Classroom;
