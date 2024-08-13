const db = require('../config/db');

const ClassroomStudent = {
    addStudentToClassroom: async (classroom_id, student_id) => {
        const query = `INSERT INTO classroom_student (classroom_id, student_id) VALUES (?, ?)`;
        const [result] = await db.query(query, [classroom_id, student_id]);
        return result;
    },

    removeStudentFromClassroom: async (classroom_id, student_id) => {
        const query = `DELETE FROM classroom_student WHERE classroom_id = ? AND student_id = ?`;
        const [result] = await db.query(query, [classroom_id, student_id]);
        return result;
    },

    findStudentsByClassroomId: async (classroom_id) => {
        const query = `
            SELECT s.username , s.id FROM users s
            JOIN classroom_student cs ON s.id = cs.student_id
            WHERE cs.classroom_id = ?`;
        const [result] = await db.query(query, [classroom_id]);
        return result;
    },
    updateStudent: async (id, classroom_id, student_id) => {
        const query = `UPDATE classroom_student SET classroom_id = ?, student_id = ? WHERE classroom_id = ?`;
        const [result] = await db.query(query, [classroom_id, student_id, id]);
        return result;
    }
};

module.exports = ClassroomStudent;
