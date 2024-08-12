const db = require('../config/db');

const ClassroomStudent = {
    addStudentToClassroom: async (classroom_id, student_id) => {
        const query = `INSERT INTO Classroom_Student (classroom_id, student_id) VALUES (?, ?)`;
        const [result] = await db.query(query, [classroom_id, student_id]);
        return result;
    },

    removeStudentFromClassroom: async (classroom_id, student_id) => {
        const query = `DELETE FROM Classroom_Student WHERE classroom_id = ? AND student_id = ?`;
        const [result] = await db.query(query, [classroom_id, student_id]);
        return result;
    },

    findStudentsByClassroomId: async (classroom_id) => {
        const query = `
            SELECT s.username , s.id FROM users s
            JOIN Classroom_Student cs ON s.id = cs.student_id
            WHERE cs.classroom_id = ?`;
        const [result] = await db.query(query, [classroom_id]);
        return result;
    },
    updateStudent: async (id, classroom_id, student_id) => {
        const query = `UPDATE Classroom_Student SET classroom_id = ?, student_id = ? WHERE classroom_id = ?`;
        const [result] = await db.query(query, [classroom_id, student_id, id]);
        return result;
    }
};

module.exports = ClassroomStudent;
